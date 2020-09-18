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
            helper.createItem(component, newCampItem);

        }		
	},
})