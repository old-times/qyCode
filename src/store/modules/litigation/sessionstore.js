/**
 * 存储sessionStorage
 */
export const setStore = (name, content) => {
	if (!name) return;
	if (typeof content !== 'string') {
		content = JSON.stringify(content);
	}
	window.sessionStorage.setItem(name, content);
}

/**
 * 获取sessionStorage普通字符串
 */
export const getStoreSTR = name => {
    if (!name) return;
    return window.sessionStorage.getItem(name);
}

export const getStoreJSON = name => {
    if (!name) return;
    return JSON.parse(window.sessionStorage.getItem(name));
}

/**
 * 删除sessionStorage
 */
export const removeStore = name => {
	if (!name) return;
	window.sessionStorage.removeItem(name);
}
