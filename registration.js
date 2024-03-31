$(document).ready(function() {
    // Membership options based on duration
    const membershipOptions = {
        monthly: [
            { label: "Access to all facilities", price: 5000 },
            { label: "Access to all facilities + Cardio Training", price: 7000 },
            { label: "Access to all facilities + Personal Trainer", price: 8000 },
            { label: "Access to all facilities + Cardio Training + Personal Trainer", price: 10000 }
        ],
        halfYearly: [
            { label: "Access to all facilities", price: 25000 },
            { label: "Access to all facilities + Cardio Training", price: 35000 },
            { label: "Access to all facilities + Personal Trainer", price: 40000 },
            { label: "Access to all facilities + Cardio Training + Personal Trainer", price: 45000 }
        ],
        yearly: [
            { label: "Access to all facilities", price: 50000 },
            { label: "Access to all facilities + Cardio Training", price: 70000 },
            { label: "Access to all facilities + Personal Trainer", price: 80000 },
            { label: "Access to all facilities + Cardio Training + Personal Trainer", price: 90000 }
        ]
    };

    // Function to update Membership Type options based on selected duration
    function updateMembershipOptions(duration) {
        const options = membershipOptions[duration];
        const selectElement = $("#membershipType");
        selectElement.empty(); // Clear previous options
        $.each(options, function(index, option) {
            selectElement.append(`<option value="${option.price}">${option.label}</option>`);
        });
    }

    // Function to update amount field based on selected membership type
    function updateAmount(amount) {
        $("#amount").val(amount);
    }

    // Handle change event of Membership Duration radio buttons
    $("input[name='membershipDuration']").change(function() {
        const selectedDuration = $(this).val();
        updateMembershipOptions(selectedDuration);
    });

    // Handle change event of Membership Type select element
    $("#membershipType").change(function() {
        const selectedAmount = $(this).val();
        updateAmount(selectedAmount);
    });

    // Initially update Membership Type options and amount field based on default selected duration
    const defaultDuration = $("input[name='membershipDuration']:checked").val();
    updateMembershipOptions(defaultDuration);
    const defaultAmount = $("#membershipType").val();
    updateAmount(defaultAmount);
});
