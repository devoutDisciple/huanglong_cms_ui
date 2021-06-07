import React from 'react';
import { Form } from 'antd';
import styles from './index.less';

export default () => {
	console.log(123);
	const [form] = Form.useForm();
	return (
		<div className={styles.login}>
			<div className={styles.login_form}>
				<Form form={form}>1111</Form>
			</div>
		</div>
	);
};
