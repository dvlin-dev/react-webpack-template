import { Drawer, Form, Button, Space, Input, message } from 'antd';
import { addSubjects } from '@/api/subjects';
import UploadImg from '@/components/upload';
import { useAppDispatch, useAppSelector } from '@/hooks/store';
import { useQueryClient } from 'react-query';
import { closeProjectModal, setName } from '@/store/subject.slice';

export default function () {
  const queryClient = useQueryClient();
  const dispatch = useAppDispatch();
  const subjectModalOpen = useAppSelector(state => state.subject.projectModalOpen);
  const logo = useAppSelector(state => state.subject.logo);
  const name = useAppSelector(state => state.subject.name);
  // TODO name logo 和redux中不一样,弹窗内容不清楚
  const model = useAppSelector(state => state.subject.modalModel);
  const handsubmit = () => {
    console.log(name, logo, model);
    if (model === 'add') {
      addSubjects({ name, logo } as { name: string; logo: string })
        .then(() => {
          message.success('添加成功');
          queryClient.invalidateQueries('mySubjects');
          dispatch(closeProjectModal());
        })
        .catch(() => {
          message.error('添加失败');
        });
    } else if (model === 'editor') {
      // 编辑
    } else {
      message.error('model错误，请联系管理员');
    }
    // dispatch(subjectActions.closeProjectModal())
  };
  return (
    <Drawer
      width="100%"
      onClose={() => dispatch(closeProjectModal())}
      visible={subjectModalOpen}
      bodyStyle={{ paddingBottom: 80 }}
      extra={
        <Space>
          <Button onClick={() => dispatch(closeProjectModal())}>Cancel</Button>
          <Button onClick={handsubmit} type="primary">
            Submit
          </Button>
        </Space>
      }
    >
      <Form layout="vertical">
        <UploadImg />
        <Form.Item
          name="name"
          label="项目名称"
          rules={[{ required: true, message: '请输入项目名称' }]}
        >
          <Input
            placeholder="请输入项目名称"
            name="name"
            value={name}
            onChange={e => dispatch(setName(e.target.value))}
          />
        </Form.Item>
      </Form>
    </Drawer>
  );
}
