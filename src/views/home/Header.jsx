import React from 'react';
import MyIcon from '@component/Icon/Icon';
import styles from './index.less';

export default () => (
	<div className={styles.loayout_right_header}>
		<span>
			<MyIcon type="icontuichu" />
			<span>您好，张振</span>
		</span>
	</div>
);
