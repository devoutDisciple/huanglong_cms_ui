import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import TitleChunk from './TitleChunk';
import styles from './index.less';
import './redux/redux';
import * as action from './redux/action';

export default () => {
	const dispatch = useDispatch();
	// const data = useSelector((state) => state.data);

	useEffect(() => {
		// dispatch(action.getOrderDataNum());
	}, [dispatch]);

	return (
		<div className={styles.data}>
			<div className={styles.title}>
				<TitleChunk title="会员" num={100} desc="今日新增: 100" />
				<TitleChunk title="发布" num={100} desc="今日新增: 200" />
				<TitleChunk title="点赞" num={100} desc="今日新增: 300" />
				<TitleChunk title="评论" num={100} desc="今日新增: 300" />
				<TitleChunk title="转发" num={100} desc="今日新增: 300" />
				<TitleChunk title="在线人数" num={100} desc="2021-05-04 12:32" />
			</div>
			<div className={styles.content}>123</div>
		</div>
	);
};
