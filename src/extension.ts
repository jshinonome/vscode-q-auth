/**
 * Copyright (c) 2021 Jo Shinonome
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import * as vscode from 'vscode';

var md5 = require('md5');

export type QCfg = {
	host: string;
	port: number;
	user: string;
	password: string;
	socketNoDelay: boolean;
	socketTimeout: number;
	label: string;
	tags: string;
	uniqLabel: string;
	useCustomizedAuth: boolean;
};

export function activate(context: vscode.ExtensionContext) {

	let api = {
		getToken(qcfg: QCfg) {
			return md5(qcfg.password);
		},
	};

	return api;
}

export function deactivate() { }
