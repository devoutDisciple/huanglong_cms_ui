import React from 'react';
import moment from 'moment';
import { Form, Input, Button, Col, Row, DatePicker } from 'antd';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import * as action from '@store/global/action';
import styles from './index.less';

const { RangePicker } = DatePicker;
const dateFormat = 'YYYY-MM-DD';
const FormItem = Form.Item;
const colLayout = {
	xs: { span: 8 },
	xxl: { span: 6 },
	className: styles.search_col,
};

const formLayout = {
	labelCol: { span: 6 },
	wrapperCol: { span: 18 },
};

export default () => {
	const [form] = Form.useForm();
	const dispatch = useDispatch();
	const history = useHistory();

	const { validateFields } = form;

	const submit = async () => {
		try {
			const values = await validateFields(['username', 'phone', 'school', 'date']);
			console.log(values, 23322);
		} catch (error) {
			console.log(error);
		}
	};
	return (
		<Row className={styles.search}>
			<Form
				form={form}
				{...formLayout}
				layout="inline"
				initialValues={{
					date: [moment(moment().subtract(7, 'day'), dateFormat), moment(new Date(), dateFormat)],
				}}
			>
				<Col {...colLayout}>
					<FormItem name="username" label="昵称">
						<Input placeholder="请输入" />
					</FormItem>
				</Col>
				<Col {...colLayout}>
					<FormItem name="phone" label="手机号">
						<Input placeholder="请输入" />
					</FormItem>
				</Col>
				<Col {...colLayout}>
					<FormItem name="school" label="学校">
						<Input placeholder="请输入" />
					</FormItem>
				</Col>
				<Col {...colLayout}>
					<FormItem name="date" label="注册日期">
						<RangePicker allowClear={false} format={dateFormat} />
					</FormItem>
				</Col>
				<Col {...colLayout} className={styles.search_btn}>
					<Button onClick={submit} type="primary">
						查询
					</Button>
				</Col>
			</Form>
		</Row>
	);
};
