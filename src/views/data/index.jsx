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
		dispatch(action.getOrderDataNum());
	}, [dispatch]);

	return (
		<div className={styles.data}>
			<div className={styles.title}>
				<TitleChunk title="订单总量(单)" num={100} desc="今日订单总量: 50" />
				<TitleChunk title="订单总量(单)" num={100} desc="今日订单总量: 200" />
				<TitleChunk title="订单总量(单)" num={100} desc="今日订单总量: 200" />
				<TitleChunk title="订单总量(单)" num={100} desc="今日订单总量: 200" />
				<TitleChunk title="订单总量(单)" num={100} desc="今日订单总量: 200" />
			</div>
			<div className={styles.content}>123</div>
		</div>
	);
};
