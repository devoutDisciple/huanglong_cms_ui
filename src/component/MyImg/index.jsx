import React from 'react';
import { Image } from 'antd';
import styles from './index.less';

export default ({ url }) => {
	console.log(url, 2222);
	return (
		<div className={styles.con}>
			<Image className={styles[url.width > url.height ? 'fix-height' : 'fix-width']} src={url.url} />
		</div>
	);
};
