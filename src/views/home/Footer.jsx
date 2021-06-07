import React from 'react';
import LogoUrl from '@asserts/img/logo.png';
import styles from './index.less';

export default () => (
	<div className={styles.layout_right_footer}>
		<img src={LogoUrl} alt="加载失败" />
		<span>MOVING洗衣</span>
	</div>
);
