declare var domain: string;

export function constructUrl(nodeId: string) {
	var fullUrl = domain + "/node/" + nodeId
    return fullUrl;
}