

product:
- product status
- 


product+type

variant:

[
    {
        _id: 'product-band-1-vietnam'
        product_status: [ // requires selection / enum - options could include active, inactive, pre-launch
            'active', 
            'inactive',
            'pre-launch'
        ],
        product_code: 'VNADLDS123',
        product_nature: { // not sure if this is required
            nature_type: 'undefined',
            tenure: 'undefined'
        },
        nature_type: [ // enum? options include voluntary and mandatory
            'voluntary',
            'mandatory'
        ],
        price_update: 'undefined',
        product_start_date_sales: '2019/1/1',
        product_end_date_sales: '2019/1/2',
        country: 'Vietnam', // table? / can be coded at the client level
        product_name: 'Internal name configured by AMS', // can be coded at the product level
        product_coverage: 'ADLD', // table? enum? // variant level
        uw_name: 'undefined', // unsure
        terms: 'undefined', // unsure
        device_category: 'smartphone', // table? // covered at the product type level - this field might not be needed
        device_type: 'Mobile', // table? // should be covered by product type
        tenure: '6 months', // 
        telco_plan: 'postpaid', // enum?
        // separate table
        // clients: [
        //     'maxis',
        //     'digi'
        // ]
        client: 'digi'
        // separate table
        pricing: 'mobile-band-1'
        // separate table
        rules: {
            claim_limit: 'device_retail_value',
            number_of_claims: 'upto_insured_sum',
            // formula required for calculation
            post_first_claim: 'top up',
            excess_fee_qualifier: [
                'device_value_rate',
                'repair_cost_rate',
                'variable_fee'
            ],
            excess_fee_repair_rate: '5', // if excess fee qualifier is device_value rate of repair rate
            excess_fee_repair_value: '200', // if excess fee qualifier is variable fee

            excess_fee_replacement: '25% of dev val', // change
            excess_fee_time_limit: '10 days',
            coverage_type: 'ADLD',
            tenure: 'annual',
            logistics: 'pick up and drop', // select from options
            service_level_promise: '5 calendar days from customer completion',
            salvage: 'AMS % (40%)',
            settlement_type: 'Repair or Replace', // select from options
            waiting_period_for_claim: 'None',
            make_coverage: 'All', // select from options
            model_coverage: 'All',
            device_coverage: 'Mobile'
        }
    }
]


