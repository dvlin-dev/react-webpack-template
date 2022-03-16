import { Button, Modal, Space, Table } from 'antd';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { delMySubject, mySubjects } from '@/api/subjects';
import { PlusOutlined, ExclamationCircleOutlined } from '@ant-design/icons';
import { openProjectModal } from '@/store/subject.slice';
import Avatar from 'antd/lib/avatar/avatar';
import { useAppDispatch } from '@/hooks/store';
import ProjectModal from './project-modal';

function Tables() {
  const { confirm } = Modal;
  const queryClient = useQueryClient();
  const { mutate } = useMutation((id: number) => delMySubject(id), {
    onSuccess: () => queryClient.invalidateQueries('mySubjects'),
  });
  const { data, isLoading } = useQuery('mySubjects', mySubjects);
  // const [pagination, setpagination] = useState({
  //   current: 1,
  //   pageSize: 10,
  //   total: 10,
  // })
  // const handleTableChange = (pagination: any, filters: any, sorter: any) => {
  //   userList(pagination.current, pagination.pageSize)
  // }
  // const userList = (current: number, pageSize: number) => {

  // }
  const dispatch = useAppDispatch();

  const delSubject = (e: any) => {
    confirm({
      title: 'Are you sure delete this task?',
      icon: <ExclamationCircleOutlined />,
      content: 'Some descriptions',
      okText: 'Yes',
      okType: 'danger',
      cancelText: 'No',
      onOk() {
        let id = e.target.getAttribute('id');
        if (id === null) {
          id = e.target.parentNode.getAttribute('id');
        }
        mutate(id);
      },
      onCancel() {
        console.log('Cancel');
      },
    });
  };

  const columns = [
    {
      title: 'logo',
      dataIndex: 'logo',
      width: '20%',
      render: (logo: string) => <Avatar src={logo} />,
    },
    {
      title: '名字',
      dataIndex: 'name',
      width: '20%',
    },
    {
      title: '创建时间',
      dataIndex: 'create_time',
      width: '20%',
    },
    {
      title: '操作',
      dataIndex: 'id',
      render: (id: number) => (
        <Space size="middle">
          <Button type="link" onClick={() => dispatch(openProjectModal('editor'))}>
            编辑
          </Button>

          <Button type="link" id={`${id}`} onClick={delSubject}>
            删除
          </Button>
        </Space>
      ),
    },
  ];

  return (
    <>
      <Button
        type="primary"
        onClick={() => dispatch(openProjectModal('add'))}
        icon={<PlusOutlined />}
      >
        新建项目
      </Button>
      <Table
        columns={columns}
        rowKey={(record: any) => record.id}
        dataSource={data?.data}
        // pagination={pagination}
        loading={isLoading}
        // onChange={handleTableChange}
      />
      <ProjectModal />
    </>
  );
}
export default Tables;
