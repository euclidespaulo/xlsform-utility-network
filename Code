// echo provides a basic check that JavaScript is working correctly
function echo(input) {
	return input.toString();
}

 function getInterception(fromGroupOption, fromTypeOption, toGroupOption, toTypeOption) {

 // Add the VIN to the decode VIN API request
const url =  'media/Test.csv';
   

const csvData = "";

// Create the request object

const xhr = new XMLHttpRequest();

// Make the request
	xhr.open("GET", url, false);
	xhr.send();

	//Process the result
	if (xhr.status !== 200) {
		// The http request did not succeed
	} else {

		csvData = xhr.responseText;
	}
	

  const rows = csvData.split('\n');
  const headers = rows[0].split(',');

  const viaFeatureIndex = headers.indexOf('viaFeature');
  const viaGroupIndex = headers.indexOf('viaGroup');
  const viaTypeIndex = headers.indexOf('viaType');

  const interception = [];

  for (let i = 1; i < rows.length; i++) {
    const row = rows[i].split(',');
    const rowFromGroup = row[0];
    const rowFromType = row[1];
    const rowToGroup = row[2];
    const rowToType = row[3];
    const viaFeature = row[viaFeatureIndex];
    const viaGroup = row[viaGroupIndex];
    const viaType = row[viaTypeIndex];

    if (rowFromGroup === fromGroup && rowFromType === fromType && rowToGroup === toGroup && rowToType === toType) {
      interception.push({ viaFeature, viaGroup, viaType });
    }
  }

  return interception;
  
}
