function format(url: string, ...params: string[]):string {
    let formatedUrl = url;
    for (let [index, param] of params.entries()) {
        formatedUrl = formatedUrl.replace('{' + index + '}', param);
    }

    return formatedUrl;
}

export const url = {
    format: format
}