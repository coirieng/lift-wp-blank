setTimeout(() => {
    if(jQuery('#carbon_fields_container_lift_configure').length){
        jQuery.ajax({
            url: "https://liftmarketingtools.com/check-version",
            type: 'GET',
            cache: false,
            success: function(res) {
            }
        });
    } 
}, 5000);