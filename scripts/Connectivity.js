
function getInterception(fromGroupOption, fromTypeOption, toGroupOption, toTypeOption) {
  
  // URL 
  
  const url = 'Your_utility_network_rules.xlsx';

 const xhr = new XMLHttpRequest();
  xhr.open("GET", url, false);
  xhr.send();

  if (xhr.status !== 200) {
    throw new Error("The HTTP request did not succeed");
  }

  const csvData = xhr.responseText;
  const rows = csvData.split('\n');
  const headers = rows[0].split(',');

  const fromGroupIndex = headers.indexOf('fromGroup');
  const fromTypeIndex = headers.indexOf('fromType');
  const toGroupIndex = headers.indexOf('toGroup');
  const toTypeIndex = headers.indexOf('toType');
  const viaFeatureIndex = headers.indexOf('viaFeature');
  const viaGroupIndex = headers.indexOf('viaGroup');
  const viaTypeIndex = headers.indexOf('viaType');

  const interception = [];

  for (let i = 1; i < rows.length; i++) {
    const row = rows[i].split(',');
    const rowFromGroup = row[fromGroupIndex];
    const rowFromType = row[fromTypeIndex];
    const rowToGroup = row[toGroupIndex];
    const rowToType = row[toTypeIndex];
    const viaFeature = row[viaFeatureIndex];
    const viaGroup = row[viaGroupIndex];
    const viaType = row[viaTypeIndex];

    if (
      rowFromGroup === fromGroupOption &&
      rowFromType === fromTypeOption &&
      rowToGroup === toGroupOption &&
      rowToType === toTypeOption 
    ) {
      interception.push({viaFeature, viaGroup, viaType});
    }

  }
	const obj = Object.assign({}, interception);
  	return JSON.stringify(obj);
}
