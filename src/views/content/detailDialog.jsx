import React, { useEffect, useState } from 'react';
import { Modal } from 'antd';
import styles from './index.less';

export default ({ controllerDialog }) => {
	const onCancel = () => {
		controllerDialog();
	};
	return (
		<Modal visible onCancel={onCancel}>
			1111
		</Modal>
	);
};
