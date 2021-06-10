import React, { useState } from 'react';
import { Spin, Table, Button, Popconfirm } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import Search from './Search';
import './redux/reducer';
import * as action from './redux/action';
import Dialog from './dialog';
import styles from './index.less';

export default () => {
	const {
		data: { count, list },
		condition: { current },
		loading,
	} = useSelector((state) => state.circle);
	const dispatch = useDispatch();
	const [visible, setVisible] = useState(true);
	const [editData, setEditData] = useState({});
	const [modalStatus, setModalStatus] = useState('new');

	const onSearch = () => {
		dispatch(action.getCirclesByPageFunc({}));
	};

	const controllerDialog = () => setVisible(!visible);

	// 删除模块
	const deleteRecord = (record) => {
		dispatch(action.deletePlateByIdFunc({ plate_id: record.id }, onSearch));
	};

	const editRecord = (record) => {
		setEditData(record);
		setModalStatus('edit');
		controllerDialog();
	};

	const columns = [
		{
			title: '圈子名称',
			dataIndex: 'name',
			key: 'name',
		},
		{
			title: 'logo',
			dataIndex: 'logo',
			key: 'logo',
			render: (txt) => <img className={styles.logo_img} alt="加载失败" src={txt} />,
		},
		{
			title: '背景图',
			dataIndex: 'bg_url',
			key: 'bg_url',
			render: (txt) => <img className={styles.bg_img} alt="加载失败" src={txt} />,
		},
		{
			title: '所属模块',
			dataIndex: 'plate',
			key: 'plate',
			render: (txt, record) => <span>{record.plateDetail ? record.plateDetail.name : ''}</span>,
		},

		{
			title: '关注人数',
			dataIndex: 'fellow',
			key: 'fellow',
		},
		{
			title: '内容',
			dataIndex: 'contentNum',
			key: 'contentNum',
		},
		{
			title: '类型',
			dataIndex: 'type',
			key: 'type',
			render: (txt) => <span>{txt === 1 ? '学校圈子' : '普通圈子'}</span>,
		},
		{
			title: '地区',
			dataIndex: 'address',
			key: 'address',
			render: (txt, record) => {
				if (record.type === 1) return <span>{`${record.province} ${record.city} ${record.country}`}</span>;
				return <span>--</span>;
			},
		},
		{
			title: '热度',
			dataIndex: 'hot',
			key: 'hot',
		},
		{
			title: '描述信息',
			dataIndex: 'desc',
			key: 'desc',
		},
		{
			title: '操作',
			dataIndex: 'operation',
			key: 'operation',
			render: (txt, record) => (
				<span>
					<Popconfirm
						placement="top"
						title="是否确认删除"
						onConfirm={() => deleteRecord(record)}
						okText="确定"
						cancelText="取消"
					>
						<Button type="link">删除</Button>
					</Popconfirm>

					<Button onClick={() => editRecord(record)} type="link">
						编辑
					</Button>
				</span>
			),
		},
	];
	const pageChange = (page) => {
		dispatch(action.getCirclesByPageFunc({ current: page }));
	};

	return (
		<div className={styles.wrap}>
			<Spin spinning={loading}>
				<Search controllerDialog={controllerDialog} setModalStatus={setModalStatus} />
				<div className={styles.table}>
					<Table
						rowKey="id"
						dataSource={list}
						columns={columns}
						pagination={{
							current,
							total: count,
							pageSize: 10,
							showTotal: (total) => `共 ${total} 条`,
							onChange: pageChange,
						}}
					/>
				</div>
			</Spin>
			{visible && (
				<Dialog
					onSearch={onSearch}
					editData={editData}
					status={modalStatus}
					controllerDialog={controllerDialog}
				/>
			)}
		</div>
	);
};
