import React from 'react';
import config from '@config/config';
import styles from './index.less';

export default () => {
	console.log(123);
	return (
		<div className={styles.login}>
			<div className={styles.containt}>
				<div className={styles.header}>
					<img src={`${config.baseUrl}${config.iconUrl}`} alt="加载失败" />
				</div>
			</div>
		</div>
	);
};
