import React, { useState } from 'react';
import { Spin, Table, Button, Popconfirm, message } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { filterContentTypeByTxt } from '@utils/filter';
import request from '@utils/AxiosRequest';
import Search from './Search';
import './redux/reducer';
import * as action from './redux/action';
import DetailDialog from './detailDialog';
import styles from './index.less';

export default () => {
	const {
		data: { count, list },
		condition: { current },
		loading,
	} = useSelector((state) => state.content);
	const dispatch = useDispatch();
	const [detailDialogVisible, setDetailDialogVisible] = useState(false);
	const [contentDetailId, setContentDetailId] = useState('');

	const onSearch = () => {
		dispatch(action.getContentsByPageFunc({}));
	};

	const controllerDetailDialog = () => setDetailDialogVisible(!detailDialogVisible);

	// 删除内容
	const deleteRecord = (record) => {
		request.get('/content/deleteById', { contentId: record.id }).then(() => {
			message.success('删除成功');
			onSearch();
		});
	};

	const columns = [
		{
			title: '发布人',
			dataIndex: 'username',
			key: 'username',
		},
		{
			title: '发布圈子',
			dataIndex: 'circle_names',
			key: 'circle_names',
			render: (txt) => {
				const fields = JSON.parse(txt).join(',');
				return <span>{fields}</span>;
			},
		},
		{
			title: '包含话题',
			dataIndex: 'topic_names',
			key: 'topic_names',
			render: (txt) => {
				const fields = JSON.parse(txt).join(',');
				return <span>{fields || '--'}</span>;
			},
		},
		{
			title: '发布类型',
			dataIndex: 'type',
			key: 'type',
			render: (txt) => <span>{filterContentTypeByTxt(txt)}</span>,
		},

		{
			title: '点赞',
			dataIndex: 'goods',
			key: 'goods',
		},
		{
			title: '评论',
			dataIndex: 'comment',
			key: 'comment',
		},
		{
			title: '转发',
			dataIndex: 'share',
			key: 'share',
		},
		{
			title: '热度',
			dataIndex: 'hot',
			key: 'hot',
		},
		{
			title: '发布时间',
			dataIndex: 'create_time',
			key: 'create_time',
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
					<Button
						onClick={() => {
							controllerDetailDialog();
							setContentDetailId(record.id);
						}}
						type="link"
					>
						详情
					</Button>
				</span>
			),
		},
	];

	const pageChange = (page) => {
		dispatch(action.getContentsByPageFunc({ current: page }));
	};

	return (
		<div className={styles.wrap}>
			<Spin spinning={loading}>
				<Search />
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
			{detailDialogVisible && (
				<DetailDialog contentId={contentDetailId} controllerDialog={controllerDetailDialog} />
			)}
		</div>
	);
};
