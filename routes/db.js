var mysql = require('mysql');
var url = require('url');
//var express = require('express');
var constring = require('./constring');


exports.getMenuList = function(req, res) {
    var queryObject = url.parse(req.url, true).query;
    var connection = mysql.createConnection(constring.connection);
    connection.connect();
    connection.query('SELECT * from menu where category ='+req.params.catid, function(err, rows, fields) {
        if (err) console.log('Connection result error' + err);
        if (!err) {
            console.log('no of records is ' + rows.length);
            res.json(rows);
        }
    });
    connection.end();
}
exports.getMenuCategory = function(req, res){
    var queryObject = url.parse(req.url, true).query;
    var connection = mysql.createConnection(constring.connection);
    connection.connect();
    connection.query('SELECT * from menucategory', function(err, rows, fields) {
        if (err) console.log('Connection result error' + err);
        if (!err) {
            console.log('no of records is ' + rows.length);
            res.json(rows);
        }
    });
    connection.end();
}
exports.getAllData=function(req,res){
    var json={
    "omf_chain_id": null,
    "omf_uuid": "sample",
    "omf_accuracy": "1",
    "omf_private": "0",
    "omf_version": "1.6.2",
    "omf_updated_timestamp": "2013-11-14 10:17:07",
    "restaurant_info": {
        "restaurant_name": "My Restaurant",
        "brief_description": "Sample restaurant in the OpenMenu Format.",
        "full_description": "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Vestibulum ac libero neque, quis laoreet dolor. Proin vitae erat lacus. \r\n\t    \r\nAliquam sed lectus ligula, sed pharetra tortor. Nam rutrum ipsum ut quam vestibulum vestibulum. Ut posuere rhoncus quam, id semper ligula bibendum quis. Vestibulum accumsan, neque id tristique accumsan, risus diam vehicula massa, at facilisis ligula tortor et elit. Nulla facilisi. Mauris ultrices volutpat lorem eu convallis.",
        "location_id": "x12345",
        "mobile": "0",
        "address_1": "803 Gervais St.",
        "address_2": "",
        "city_town": "Columbia",
        "state_province": "SC",
        "postal_code": "29202",
        "country": "US",
        "phone": "(555) 777-7777",
        "fax": "(555) 888-8888",
        "longitude": "-81.039773",
        "latitude": "33.999523",
        "business_type": "independent",
        "utc_offset": "-5.00",
        "website_url": "http://openmenu.com",
        "omf_file_url": "http://openmenu.com/menu/sample",
        "omf_private": "0"
    },
    "environment_info": {
        "cuisine_type_primary": "Steakhouse",
        "cuisine_type_secondary": "",
        "smoking_allowed": "0",
        "takeout_available": "1",
        "seating_qty": null,
        "max_group_size": "12",
        "pets_allowed": "0",
        "wheelchair_accessible": null,
        "age_level_preference": "",
        "dress_code": "casual",
        "delivery_available": null,
        "delivery_radius": null,
        "delivery_fee": null,
        "catering_available": null,
        "reservations": "",
        "alcohol_type": "",
        "music_type": ""
    },
    "parent_company": {
        "parent_company_name": "",
        "parent_company_website": "",
        "address_1": "",
        "address_2": "",
        "city_town": "",
        "state_province": "",
        "postal_code": "",
        "country": "",
        "phone": "",
        "fax": ""
    },
    "operating_days": {
        "mon_open_time": "11:00",
        "mon_close_time": "22:00",
        "tue_open_time": "11:00",
        "tue_close_time": "22:00",
        "wed_open_time": "11:00",
        "wed_close_time": "22:00",
        "thu_open_time": "11:00",
        "thu_close_time": "22:00",
        "fri_open_time": "11:00",
        "fri_close_time": "22:00",
        "sat_open_time": "11:00",
        "sat_close_time": "22:00",
        "sun_open_time": "",
        "sun_close_time": ""
    },
    "logo_urls": [
        {
            "logo_url": "http://openmenu.com/cdn/logos/sample_320.png",
            "width": null,
            "height": null,
            "image_media_id": "4",
            "image_type_id": "1",
            "image_type": "Full",
            "image_media": "All"
        },
        {
            "logo_url": "http://openmenu.com/cdn/logos/sample_48.png",
            "width": null,
            "height": null,
            "image_media_id": "4",
            "image_type_id": "2",
            "image_type": "Thumbnail",
            "image_media": "All"
        }
    ],
    "seating_locations": [
        {
            "seating_location": "outdoor"
        },
        {
            "seating_location": "indoor"
        }
    ],
    "contacts": [
        {
            "first_name": "Chris",
            "last_name": "Hanscom",
            "email": "menu@openmenu.com",
            "contact_type": "primary"
        }
    ],
    "accepted_currencies": [
        {
            "accepted_currency": "USD"
        }
    ],
    "online_reservations": [],
    "online_ordering": [],
    "parking": false,
    "crosswalks": [],
    "menus": [
        {   "id":0,
            "menu_name": "Main Menu",
            "menu_description": "This is a sample menu on the OpenMenu platform",
            "menu_note": "gratuity added for large parties",
            "currency_symbol": "USD",
            "language": "en",
            "disabled": "0",
            "menu_uid": "3e5d0b48-27f2-11e1-80ac-00163eeae34c",
            "menu_duration_name": "lunch-dinner",
            "menu_duration_time_start": "11:00",
            "menu_duration_time_end": "22:00",
            "menu_groups": [
                {
                    "group_name": "Appetizers",
                    "group_note": "",
                    "group_description": "",
                    "group_uid": "2de4ae10-27f2-11e1-80ac-00163eeae34c",
                    "disabled": "0",
                    "menu_group_options": [],
                    "menu_items": [
                        {
                            "menu_item_name": "Coconut Shrimp",
                            "menu_item_description": "Crispy Coconut Shrimp & tangy mango lime sauce",
                            "menu_item_price": "7.95",
                            "menu_item_calories": "350",
                            "menu_item_heat_index": null,
                            "menu_item_allergy_information": "",
                            "menu_item_allergy_information_allergens": "",
                            "item_uid": "2e1174b8-27f2-11e1-80ac-00163eeae34c",
                            "disabled": "0",
                            "special": null,
                            "vegetarian": null,
                            "vegan": null,
                            "kosher": null,
                            "halal": null,
                            "gluten_free": null,
                            "menu_item_options": [],
                            "menu_item_sizes": [],
                            "menu_item_tags": [],
                            "menu_item_images": [
                                {
                                    "image_url": "http://openmenu.com/cdn/items/a/2e1174b8-27f2-11e1-80ac-00163eeae34c_320.jpg",
                                    "width": null,
                                    "height": null,
                                    "image_media_id": "4",
                                    "image_type_id": "1",
                                    "image_type": "Full",
                                    "image_media": "All"
                                },
                                {
                                    "image_url": "http://openmenu.com/cdn/items/a/2e1174b8-27f2-11e1-80ac-00163eeae34c_48.jpg",
                                    "width": null,
                                    "height": null,
                                    "image_media_id": "4",
                                    "image_type_id": "2",
                                    "image_type": "Thumbnail",
                                    "image_media": "All"
                                }
                            ]
                        },
                        {
                            "menu_item_name": "Calamari",
                            "menu_item_description": "Our calamari is lightly fried and tossed with a sweet and spicy Asian mango sauce.",
                            "menu_item_price": null,
                            "menu_item_calories": null,
                            "menu_item_heat_index": "2",
                            "menu_item_allergy_information": "",
                            "menu_item_allergy_information_allergens": "",
                            "item_uid": "477ebdde-27f2-11e1-80ac-00163eeae34c",
                            "disabled": "0",
                            "special": "1",
                            "vegetarian": null,
                            "vegan": null,
                            "kosher": null,
                            "halal": null,
                            "gluten_free": null,
                            "menu_item_options": [],
                            "menu_item_sizes": [
                                {
                                    "menu_item_size_name": "small",
                                    "menu_item_size_description": "",
                                    "menu_item_size_price": "6.95",
                                    "menu_item_size_calories": null
                                },
                                {
                                    "menu_item_size_name": "large",
                                    "menu_item_size_description": "",
                                    "menu_item_size_price": "8.95",
                                    "menu_item_size_calories": null
                                }
                            ],
                            "menu_item_tags": [],
                            "menu_item_images": []
                        },
                        {
                            "menu_item_name": "Tempura Onion Rings",
                            "menu_item_description": "With a honey Thai sauce",
                            "menu_item_price": "7.95",
                            "menu_item_calories": null,
                            "menu_item_heat_index": "1",
                            "menu_item_allergy_information": "",
                            "menu_item_allergy_information_allergens": "",
                            "item_uid": "2e117544-27f2-11e1-80ac-00163eeae34c",
                            "disabled": "0",
                            "special": null,
                            "vegetarian": null,
                            "vegan": null,
                            "kosher": null,
                            "halal": null,
                            "gluten_free": null,
                            "menu_item_options": [],
                            "menu_item_sizes": [],
                            "menu_item_tags": [],
                            "menu_item_images": [
                                {
                                    "image_url": "http://openmenu.com/cdn/items/a/2e117544-27f2-11e1-80ac-00163eeae34c_320.jpg",
                                    "width": null,
                                    "height": null,
                                    "image_media_id": "4",
                                    "image_type_id": "1",
                                    "image_type": "Full",
                                    "image_media": "All"
                                },
                                {
                                    "image_url": "http://openmenu.com/cdn/items/a/2e117544-27f2-11e1-80ac-00163eeae34c_48.jpg",
                                    "width": null,
                                    "height": null,
                                    "image_media_id": "4",
                                    "image_type_id": "2",
                                    "image_type": "Thumbnail",
                                    "image_media": "All"
                                }
                            ]
                        }
                    ]
                },
                {
                    "group_name": "Entrees",
                    "group_note": "",
                    "group_description": "",
                    "group_uid": "2de591f4-27f2-11e1-80ac-00163eeae34c",
                    "disabled": "0",
                    "menu_group_options": [],
                    "menu_items": [
                        {
                            "menu_item_name": "Rack of Lamb",
                            "menu_item_description": "Coffee Citrus Crusted Lamb",
                            "menu_item_price": "22.95",
                            "menu_item_calories": null,
                            "menu_item_heat_index": null,
                            "menu_item_allergy_information": "",
                            "menu_item_allergy_information_allergens": "",
                            "item_uid": "2e1701bc-27f2-11e1-80ac-00163eeae34c",
                            "disabled": null,
                            "special": null,
                            "vegetarian": null,
                            "vegan": null,
                            "kosher": null,
                            "halal": null,
                            "gluten_free": null,
                            "menu_item_options": [],
                            "menu_item_sizes": [],
                            "menu_item_tags": [],
                            "menu_item_images": []
                        },
                        {
                            "menu_item_name": "Soft Shell Crabs",
                            "menu_item_description": "Almond encrusted, seasoned and sauteed in butter to a crispy brown",
                            "menu_item_price": "19.95",
                            "menu_item_calories": null,
                            "menu_item_heat_index": null,
                            "menu_item_allergy_information": "Reference allergens for allergy information",
                            "menu_item_allergy_information_allergens": "shellfish, nuts",
                            "item_uid": "2e17013a-27f2-11e1-80ac-00163eeae34c",
                            "disabled": null,
                            "special": null,
                            "vegetarian": null,
                            "vegan": null,
                            "kosher": null,
                            "halal": null,
                            "gluten_free": null,
                            "menu_item_options": [],
                            "menu_item_sizes": [],
                            "menu_item_tags": [],
                            "menu_item_images": []
                        },
                        {
                            "menu_item_name": "Cioppino",
                            "menu_item_description": "Fresh fish, scallops, mussels, calamari, and shrimp in a tomato-garlic saffron broth over linguini",
                            "menu_item_price": "24.95",
                            "menu_item_calories": null,
                            "menu_item_heat_index": null,
                            "menu_item_allergy_information": "",
                            "menu_item_allergy_information_allergens": "",
                            "item_uid": "2e1700b8-27f2-11e1-80ac-00163eeae34c",
                            "disabled": null,
                            "special": "1",
                            "vegetarian": null,
                            "vegan": null,
                            "kosher": null,
                            "halal": null,
                            "gluten_free": null,
                            "menu_item_options": [],
                            "menu_item_sizes": [],
                            "menu_item_tags": [],
                            "menu_item_images": []
                        },
                        {
                            "menu_item_name": "Baby Back Ribs",
                            "menu_item_description": "Dry rub or sauce you can't go wrong",
                            "menu_item_price": "13.95",
                            "menu_item_calories": null,
                            "menu_item_heat_index": null,
                            "menu_item_allergy_information": "",
                            "menu_item_allergy_information_allergens": "",
                            "item_uid": "477ebda2-27f2-11e1-80ac-00163eeae34c",
                            "disabled": "0",
                            "special": null,
                            "vegetarian": null,
                            "vegan": null,
                            "kosher": null,
                            "halal": null,
                            "gluten_free": null,
                            "menu_item_options": [],
                            "menu_item_sizes": [],
                            "menu_item_tags": [],
                            "menu_item_images": []
                        }
                    ]
                },
                {
                    "group_name": "Salads",
                    "group_note": "",
                    "group_description": "",
                    "group_uid": "2de4ae7e-27f2-11e1-80ac-00163eeae34c",
                    "disabled": "0",
                    "menu_group_options": [
                        {
                            "group_options_name": "Dressings",
                            "menu_group_option_information": "",
                            "menu_group_option_min_selected": null,
                            "menu_group_option_max_selected": null,
                            "option_items": [
                                {
                                    "menu_group_option_name": "Italian",
                                    "menu_group_option_additional_cost": "1.00",
                                    "selected": null
                                },
                                {
                                    "menu_group_option_name": "French",
                                    "menu_group_option_additional_cost": "1.25",
                                    "selected": null
                                },
                                {
                                    "menu_group_option_name": "Thousand Island",
                                    "menu_group_option_additional_cost": "1.00",
                                    "selected": null
                                },
                                {
                                    "menu_group_option_name": "Ranch",
                                    "menu_group_option_additional_cost": null,
                                    "selected": "1"
                                }
                            ]
                        }
                    ],
                    "menu_items": [
                        {
                            "menu_item_name": "Chef Salad",
                            "menu_item_description": "Best chef salad in a 20 mile radius",
                            "menu_item_price": null,
                            "menu_item_calories": null,
                            "menu_item_heat_index": null,
                            "menu_item_allergy_information": "",
                            "menu_item_allergy_information_allergens": "",
                            "item_uid": "2e117652-27f2-11e1-80ac-00163eeae34c",
                            "disabled": "0",
                            "special": null,
                            "vegetarian": null,
                            "vegan": null,
                            "kosher": null,
                            "halal": null,
                            "gluten_free": null,
                            "menu_item_options": [],
                            "menu_item_sizes": [
                                {
                                    "menu_item_size_name": "half",
                                    "menu_item_size_description": "",
                                    "menu_item_size_price": "6.95",
                                    "menu_item_size_calories": null
                                },
                                {
                                    "menu_item_size_name": "full",
                                    "menu_item_size_description": "",
                                    "menu_item_size_price": "8.95",
                                    "menu_item_size_calories": null
                                }
                            ],
                            "menu_item_tags": [],
                            "menu_item_images": []
                        },
                        {
                            "menu_item_name": "Ceasar Salad",
                            "menu_item_description": "Fresh romain lettuce with aged parmesan reggiano",
                            "menu_item_price": "9.95",
                            "menu_item_calories": null,
                            "menu_item_heat_index": null,
                            "menu_item_allergy_information": "",
                            "menu_item_allergy_information_allergens": "",
                            "item_uid": "2e117760-27f2-11e1-80ac-00163eeae34c",
                            "disabled": "0",
                            "special": null,
                            "vegetarian": null,
                            "vegan": null,
                            "kosher": null,
                            "halal": null,
                            "gluten_free": null,
                            "menu_item_options": [],
                            "menu_item_sizes": [],
                            "menu_item_tags": [],
                            "menu_item_images": [
                                {
                                    "image_url": "http://openmenu.com/cdn/items/a/2e117760-27f2-11e1-80ac-00163eeae34c_320.jpg",
                                    "width": null,
                                    "height": null,
                                    "image_media_id": "4",
                                    "image_type_id": "1",
                                    "image_type": "Full",
                                    "image_media": "All"
                                },
                                {
                                    "image_url": "http://openmenu.com/cdn/items/a/2e117760-27f2-11e1-80ac-00163eeae34c_48.jpg",
                                    "width": null,
                                    "height": null,
                                    "image_media_id": "4",
                                    "image_type_id": "2",
                                    "image_type": "Thumbnail",
                                    "image_media": "All"
                                }
                            ]
                        },
                        {
                            "menu_item_name": "Cobb Salad",
                            "menu_item_description": "Iceberg lettuce topped with turkey, ham, hard cooked eggs, avocado, diced tomatoes, bacon, bleu cheese crumbles and black olives",
                            "menu_item_price": null,
                            "menu_item_calories": null,
                            "menu_item_heat_index": null,
                            "menu_item_allergy_information": "",
                            "menu_item_allergy_information_allergens": "",
                            "item_uid": "2e1176d4-27f2-11e1-80ac-00163eeae34c",
                            "disabled": "0",
                            "special": "1",
                            "vegetarian": null,
                            "vegan": null,
                            "kosher": null,
                            "halal": null,
                            "gluten_free": null,
                            "menu_item_options": [],
                            "menu_item_sizes": [
                                {
                                    "menu_item_size_name": "half",
                                    "menu_item_size_description": "",
                                    "menu_item_size_price": "6.95",
                                    "menu_item_size_calories": null
                                },
                                {
                                    "menu_item_size_name": "full",
                                    "menu_item_size_description": "",
                                    "menu_item_size_price": "8.95",
                                    "menu_item_size_calories": null
                                }
                            ],
                            "menu_item_tags": [],
                            "menu_item_images": []
                        },
                        {
                            "menu_item_name": "Garden",
                            "menu_item_description": "A big salad filled with lettuce, tomatoes, carrots, radishes, cucumbers and shredded cheese",
                            "menu_item_price": "8.95",
                            "menu_item_calories": null,
                            "menu_item_heat_index": null,
                            "menu_item_allergy_information": "",
                            "menu_item_allergy_information_allergens": "",
                            "item_uid": "2e1177ec-27f2-11e1-80ac-00163eeae34c",
                            "disabled": null,
                            "special": null,
                            "vegetarian": "1",
                            "vegan": null,
                            "kosher": null,
                            "halal": null,
                            "gluten_free": null,
                            "menu_item_options": [],
                            "menu_item_sizes": [],
                            "menu_item_tags": [],
                            "menu_item_images": []
                        }
                    ]
                }
            ]
        },
        {
            "id":1,
            "menu_name": "Late Night Menu",
            "menu_description": "very late",
            "menu_note": "",
            "currency_symbol": "USD",
            "language": "en",
            "disabled": "0",
            "menu_uid": "3e5b0690-27f2-11e1-80ac-00163eeae34c",
            "menu_duration_name": "late-night",
            "menu_duration_time_start": "20:00",
            "menu_duration_time_end": "23:00",
            "menu_groups": [
                {
                    "group_name": "Bar Food & Quick Eats",
                    "group_note": "",
                    "group_description": "",
                    "group_uid": "3ef95822-27f2-11e1-80ac-00163eeae34c",
                    "disabled": "0",
                    "menu_group_options": [],
                    "menu_items": [
                        {
                            "menu_item_name": "Cheese Sticks",
                            "menu_item_description": "Cheese sticks with marinara sauce",
                            "menu_item_price": "6.95",
                            "menu_item_calories": null,
                            "menu_item_heat_index": null,
                            "menu_item_allergy_information": "",
                            "menu_item_allergy_information_allergens": "",
                            "item_uid": "477ebd20-27f2-11e1-80ac-00163eeae34c",
                            "disabled": "0",
                            "special": null,
                            "vegetarian": null,
                            "vegan": null,
                            "kosher": null,
                            "halal": null,
                            "gluten_free": null,
                            "menu_item_options": [],
                            "menu_item_sizes": [],
                            "menu_item_tags": [],
                            "menu_item_images": []
                        },
                        {
                            "menu_item_name": "Coconut Shrimp",
                            "menu_item_description": "Crispy Coconut Shrimp",
                            "menu_item_price": "7.95",
                            "menu_item_calories": "350",
                            "menu_item_heat_index": null,
                            "menu_item_allergy_information": "",
                            "menu_item_allergy_information_allergens": "",
                            "item_uid": "477ebd5c-27f2-11e1-80ac-00163eeae34c",
                            "disabled": "0",
                            "special": null,
                            "vegetarian": null,
                            "vegan": null,
                            "kosher": null,
                            "halal": null,
                            "gluten_free": null,
                            "menu_item_options": [],
                            "menu_item_sizes": [],
                            "menu_item_tags": [],
                            "menu_item_images": []
                        },
                        {
                            "menu_item_name": "Tempura Onion Rings",
                            "menu_item_description": "With a honey Thai sauce",
                            "menu_item_price": "7.95",
                            "menu_item_calories": null,
                            "menu_item_heat_index": null,
                            "menu_item_allergy_information": "",
                            "menu_item_allergy_information_allergens": "",
                            "item_uid": "487f7a20-27f2-11e1-80ac-00163eeae34c",
                            "disabled": "0",
                            "special": null,
                            "vegetarian": null,
                            "vegan": null,
                            "kosher": null,
                            "halal": null,
                            "gluten_free": null,
                            "menu_item_options": [],
                            "menu_item_sizes": [],
                            "menu_item_tags": [],
                            "menu_item_images": []
                        },
                        {
                            "menu_item_name": "Calamari",
                            "menu_item_description": "Our calamari is lightly fried and tossed with a sweet and spicy Asian mango sauce.",
                            "menu_item_price": "8.85",
                            "menu_item_calories": null,
                            "menu_item_heat_index": null,
                            "menu_item_allergy_information": "",
                            "menu_item_allergy_information_allergens": "",
                            "item_uid": "48755bda-27f2-11e1-80ac-00163eeae34c",
                            "disabled": "0",
                            "special": null,
                            "vegetarian": null,
                            "vegan": null,
                            "kosher": null,
                            "halal": null,
                            "gluten_free": null,
                            "menu_item_options": [],
                            "menu_item_sizes": [],
                            "menu_item_tags": [],
                            "menu_item_images": []
                        }
                    ]
                }
            ]
        }
    ]
}
 res.json(json);
}
