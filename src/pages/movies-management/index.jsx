import {
  Button,
  Form,
  Image,
  Input,
  Modal,
  Popconfirm,
  Select,
  Table,
  Upload,
} from "antd";
import TextArea from "antd/es/input/TextArea";
import axios from "axios";
import { useEffect, useState } from "react";
import { PlusOutlined } from "@ant-design/icons";
import { useForm } from "antd/es/form/Form";
import uploadFile from "../../utils/upload";
import "./index.scss";

function MoivesManagement() {
  const [form] = useForm();
  const [dataSource, setDataSource] = useState([]);
  const [options, setOptions] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const columns = [
    {
      title: "Movie name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Movie category",
      dataIndex: "category",
      key: "category",
    },
    {
      title: "Movie description",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Poster",
      dataIndex: "poster_path",
      key: "poster_path",
      render: (value) => <Image alt="image error" src={value} width={50} />,
    },
    {
      title: "Backdrop",
      dataIndex: "backdrop_path",
      key: "backdrop_path",
      render: (value) => <Image alt="image error" src={value} width={50} />,
    },
    {
      title: "Action",
      dataIndex: "id",
      key: "id",
      render: (value) => (
        <Popconfirm
          title="Delete the task"
          description="Are you sure to delete this task?"
          onConfirm={() => handleDeleteMovie(value)}
          okText="Yes"
          cancelText="No"
        >
          <Button type="primary" danger>
            Delete
          </Button>
        </Popconfirm>
      ),
    },
    {
      title: "Action",
      dataIndex: "id",
      key: "id",
      render: (value) => (
        <Button
          type="primary"
          onClick={() => {
            handleUpdateMovie(value);
          }}
        >
          Update
        </Button>
      ),
    },
  ];
  const uploadButton = (
    <button
      style={{
        border: 0,
        background: "none",
      }}
      type="button"
    >
      <PlusOutlined />
      <div
        style={{
          marginTop: 8,
        }}
      >
        Upload
      </div>
    </button>
  );
  const [fileList, setFileList] = useState([]);

  const getBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });

  async function fetchMovie() {
    const response = await axios.get(
      "https://67038f65ab8a8f8927309fc3.mockapi.io/movie"
    );
    setDataSource(response.data);
  }
  async function fetchCategory() {
    const response = await axios.get(
      "https://67038f65ab8a8f8927309fc3.mockapi.io/category"
    );

    const formattedOptions = response.data.map((item) => ({
      label: item.name,
      value: item.name,
    }));
    setOptions(formattedOptions);
  }
  function handleShowModal() {
    fetchCategory();
    setIsOpen(true);
  }
  function handleCloseModal() {
    setIsOpen(false);
  }
  async function handleSubmit(values) {
    // upload anh len firebase va tra ve URL
    const url = await uploadFile(values.poster_path.file.originFileObj);
    values.poster_path = url;

    const response = axios.post(
      "https://67038f65ab8a8f8927309fc3.mockapi.io/movie",
      values
    );
    setDataSource([...dataSource, values]);

    //clear form
    form.resetFields();
    //dong modal
    setIsOpen(false);
  }
  function handleOk() {
    form.submit();
  }
  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    setPreviewImage(file.url || file.preview);
    setPreviewOpen(true);
  };
  const handleChange = ({ fileList: newFileList }) => setFileList(newFileList);
  const handleSelectChange = (values) => {
    console.log(values);
  };
  const handleDeleteMovie = async (id) => {
    await axios.delete(
      `https://67038f65ab8a8f8927309fc3.mockapi.io/movie/${id}`
    );
    const listAfterDelete = dataSource.filter((movie) => movie.id !== id);
    setDataSource(listAfterDelete);
  };

  const handleUpdateMovie = async (id) => {
    console.log(`update movie with id = ${id}`);
  };
  //goi function chay 1 lan dau tien
  useEffect(() => {
    fetchMovie();
  }, []);

  return (
    <div className="movie-container">
      <Button type="primary" onClick={handleShowModal}>
        Add new movie
      </Button>
      <Table columns={columns} dataSource={dataSource} />
      <Modal
        open={isOpen}
        onCancel={handleCloseModal}
        onOk={handleOk}
        title="Add new movie"
      >
        {/* antd chia man hinh lam 24 phan */}
        <Form
          labelCol={{
            span: 24,
          }}
          form={form}
          onFinish={handleSubmit}
        >
          <Form.Item label="Movie name" name={"name"}>
            <Input />
          </Form.Item>
          <Form.Item label="Description" name={"description"}>
            <TextArea rows={4} />
          </Form.Item>
          <Form.Item label="Trailer" name={"trailer"}>
            <Input />
          </Form.Item>
          <Form.Item label="Category" name={"category"}>
            <Select
              showSearch
              placeholder="Select a category"
              style={{
                width: "100%",
              }}
              onChange={handleSelectChange}
              tokenSeparators={[","]}
              options={options}
            />
          </Form.Item>
          <Form.Item label="Poster" name={"poster_path"}>
            <Upload
              action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
              listType="picture-card"
              fileList={fileList}
              onPreview={handlePreview}
              onChange={handleChange}
            >
              {fileList.length >= 8 ? null : uploadButton}
            </Upload>
          </Form.Item>
        </Form>
      </Modal>
      {previewImage && (
        <Image
          wrapperStyle={{
            display: "none",
          }}
          preview={{
            visible: previewOpen,
            onVisibleChange: (visible) => setPreviewOpen(visible),
            afterOpenChange: (visible) => !visible && setPreviewImage(""),
          }}
          src={previewImage}
        />
      )}
    </div>
  );
}

export default MoivesManagement;
