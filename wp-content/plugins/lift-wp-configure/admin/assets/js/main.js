setTimeout(() => {
    if(jQuery('#carbon_fields_container_lift_configure').length){
        console.log('main.js loaded');
        jQuery.ajax({
            url: "https://liftmarketingtools.com/check-version",
            type: 'GET',
            cache: false,
            success: function(res) {
                console.log(res);
            }
        });
    } 
}, 5000);