({
	clickCreateItem : function(component, event, helper) {
        let validItem = component.find('itemform').reduce(function (validSoFar, inputCmp) {
            // Displays error messages for invalid fields
            inputCmp.showHelpMessageIfInvalid();
            return validSoFar && inputCmp.get('v.validity').valid;
        }, true);
        // If we pass error checking, do some real work
        if(validItem){
            // Create the new camping item
            let newCampItem = component.get("v.newItem");
            console.log("Create camping item: " + JSON.stringify(newCampItem));
            //helper.createExpense(component, newCampItem);
          			//helper code below  
          	let theItems = component.get("v.items");
          	// Copy the expense to a new object
          	// THIS IS A DISGUSTING, TEMPORARY HACK
          	//let newExpense = JSON.parse(JSON.stringify(expense));
          	theItems.push(newCampItem);
          	component.set("v.items", theItems);
            component.set("v.newItem", {'sobjectType':'Camping_Item__c',
                                               'Name': '',
                                        'Quantity__c': 0,
                                           'Price__c': 0,
                                          'Packed__c': false});
        }		
	}
})