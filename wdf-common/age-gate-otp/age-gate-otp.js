const scriptURL = new URL(document.currentScript.src);

window.onload = function () {
    console.log('onload event');
    if (!window.jQuery || typeof(window.jQuery) == 'undefined' || window.jQuery == null) {
        console.log('load jquery');
        var head = document.getElementsByTagName('head')[0];
        var script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = 'https://code.jquery.com/jquery-latest.min.js';
        head.appendChild(script);
    }
}


class ageGateOTP {
    constructor(id, _chiamante) {
        this.id = id;
        this.chiamante = _chiamante;
        this.htmlStructure = null;
        this.type = 'full';
        this.minAge = 18;
        this.dateFormat = 'yyyy/mm/dd';
        this.configuration = {
            "customization": {

            },
            "default": {
                "code": "int",
                "type": "simple",
                "formatDate": "dd/mm/yyyy",
                "translations": {
                    "title": "Are you of legal drinking age?",
                    "errors": {
                        "invalidDate": "Invalid Date",
                        "invalidAge": "Invalid Age"
                    },
                    "submit": "submit",
                    "remember": "Remember my choice",
                    "terms": "By entering this site you accept terms and condition",
                    "locationMessage": "It seems that you are in USA, if not, select your country of origin",
                    "yesBtn": "yes",
                    "noBtn": "no"
                }
            },
            "countries": [
                {
                    "country": "Italia",
                    "code": "it",
                    "type": "simple",
                    "formatDate": "dd/mm/yyyy",
                    "translations": {
                        "title": "Hai l'età legale per bere?",
                        "errors": {
                            "invalidDate": "Data Invalida",
                            "invalidAge": "Età invalida"
                        },
                        "submit": "Entra",
                        "remember": "Ricorda la mia scelta",
                        "terms": "Entrando in questo sito accetti termini e condizioni",
                        "locationMessage": "Sembra che tu sia in Italia, se così non fosse seleziona la tua country di appartenenza",
                        "yesBtn": "si",
                        "noBtn": "no"
                    }
                },
                {
                    "country": "France",
                    "code": "fr",
                    "type": "progressive",
                    "formatDate": "dd/mm/yyyy",
                    "translations": {
                        "title": "Avez-vous l'âge légal pour boire?",
                        "errors": {
                            "invalidDate": "Date invalide",
                            "invalidAge": "Âge invalide"
                        },
                        "submit": "Entrer",
                        "remember": "Souviens-toi de mon choix",
                        "terms": "En accédant à ce site, vous acceptez les termes et conditions",
                        "locationMessage": "Il semble que vous soyez aux France, sinon, sélectionnez votre pays d'origine",
                        "yesBtn": "oui",
                        "noBtn": "no"
                    }
                },
                {
                    "country": "Deutschland",
                    "code": "de",
                    "type": "progressive",
                    "formatDate": "dd/mm/yyyy",
                    "translations": {
                        "title": "Sind Sie volljährig?",
                        "errors": {
                            "invalidDate": "Ungültiges Datum",
                            "invalidAge": "Ungültiges Alter"
                        },
                        "submit": "Einreichen",
                        "remember": "Erinnere dich an meine Wahl",
                        "terms": "Mit dem Betreten dieser Website akzeptieren Sie die Allgemeinen Geschäftsbedingungen",
                        "locationMessage": "Anscheinend sind Sie in Deutschland, wenn nicht, wählen Sie Ihr Herkunftsland",
                        "yesBtn": "jawohl",
                        "noBtn": "nein"
                    }
                },
                {
                    "country": "United Kingdom",
                    "code": "gb",
                    "type": "progressive",
                    "formatDate": "dd/mm/yyyy",
                    "translations": {
                        "title": "Are you of legal drinking age?",
                        "errors": {
                            "invalidDate": "Invalid Date",
                            "invalidAge": "Invalid Age"
                        },
                        "submit": "submit",
                        "remember": "Remember my choice",
                        "terms": "By entering this site you accept terms and condition",
                        "locationMessage": "It seems that you are in United Kingdom, if not, select your country of origin",
                        "yesBtn": "yes",
                        "noBtn": "no"
                    }
                },
                {
                    "country": "Canada",
                    "code": "ca",
                    "type": "progressive",
                    "formatDate": "dd/mm/yyyy",
                    "translations": {
                        "title": "Are you of legal drinking age?",
                        "errors": {
                            "invalidDate": "Invalid Date",
                            "invalidAge": "Invalid Age"
                        },
                        "submit": "submit",
                        "remember": "Remember my choice",
                        "terms": "By entering this site you accept terms and condition",
                        "locationMessage": "It seems that you are in Canada, if not, select your country of origin",
                        "yesBtn": "yes",
                        "noBtn": "no"
                    }
                },
                {
                    "country": "Belgium",
                    "code": "be",
                    "type": "progressive",
                    "formatDate": "dd/mm/yyyy",
                    "translations": {
                        "title": "Heeft u de wettelijke leeftijd om alcohol te drinken?",
                        "errors": {
                            "invalidDate": "Ongeldige datum",
                            "invalidAge": "Ongeldige leeftijd"
                        },
                        "submit": "indienen",
                        "remember": "Onthoud mijn keuze",
                        "terms": "Door deze site te betreden, accepteert u de algemene voorwaarden",
                        "locationMessage": "Het lijkt erop dat u zich in België bevindt, zo niet, selecteer dan uw land van herkomst",
                        "yesBtn": "ja",
                        "noBtn": "nee"
                    }
                },
                {
                    "country": "USA",
                    "code": "us",
                    "type": "complete",
                    "formatDate": "yyyy/mm/dd",
                    "translations": {
                        "title": "Are you of legal drinking age?",
                        "errors": {
                            "invalidDate": "Invalid Date",
                            "invalidAge": "Invalid Age"
                        },
                        "submit": "submit",
                        "remember": "Remember my choice",
                        "terms": "By entering this site you accept terms and condition",
                        "locationMessage": "It seems that you are in USA, if not, select your country of origin",
                        "yesBtn": "yes",
                        "noBtn": "no"
                    }
                }
            ]
        };
        this.legalAgeList = {
            "default": {
                "code": "int",
                "age": 18
            }
        };
        this.geolocalizationData = null;
        this.globalDomain = document.getElementById('ageGateOTP').getAttribute('data-domain-path');
        this.redirectPath = '/it';
    }
};

ageGateOTP.prototype.startAgeGate = function () {
    let _this = this;

    if (window.jQuery && typeof(window.jQuery) !== 'undefined' && window.jQuery !== null) {
        let agCookie = _this.getCookie('age-gate-ok');

        if(!agCookie){
            _this.loadHTML();
        }
    } else {
        setTimeout(function () { 
            _this.startAgeGate();
        }, 50);
    }
};

ageGateOTP.prototype.loadHTML = function () {
    let _this = this;
    var templateUrl = scriptURL.protocol + "//" + scriptURL.hostname + "/wdf-common/age-gate-otp/template.html";

    fetch(templateUrl).then(response=> response.text())
    .then(text=> {
        _this.getAllConfigurations(function(){
            text = _this.replacePlaceholder(text);
    
            _this.htmlStructure = jQuery(text);
            _this.populateCountrySelect();

            let countryCode = 'int';
            let geolocalizationCheck = 0;
            if(_this.geolocalizationData != null && _this.geolocalizationData.result){
                countryCode = _this.geolocalizationData.data.toLowerCase();
                geolocalizationCheck = 1;
            }

            _this.populateField();
            _this.setCountry(countryCode, geolocalizationCheck, 1);
    
            jQuery('body').append(_this.htmlStructure);
            jQuery('body').addClass('overflowHidden');
            _this.initListeners();
        });       
    }).catch(function(err) {
        console.log("error", err);
    });
};

ageGateOTP.prototype.getAllConfigurations = function (callback) {
    let _this = this;

    let configurationData = _this.getConfiguration();
    let legalAgeListData = _this.getLegalAgeList();
    let geolocalizationService = _this.geolocalizationService();

    Promise.allSettled([configurationData, legalAgeListData, geolocalizationService])
    .then(function(res){
        let [configurationData, legalAgeListData, geolocalizationService] = res;

        configurationData = _this.checkResponse(configurationData);

        if(configurationData != null){
            _this.configuration = configurationData;
        }

        legalAgeListData = _this.checkResponse(legalAgeListData);

        if(legalAgeListData != null){
            _this.legalAgeList = legalAgeListData;
        }

        geolocalizationService = _this.checkResponse(geolocalizationService);

        if(geolocalizationService != null){
            _this.geolocalizationData = geolocalizationService;
        }

        callback();
    }).catch((err) => {
        console.log("err", err);
    });
};

ageGateOTP.prototype.getConfiguration = function () {
    let _this = this;

    var configURL = scriptURL.protocol + "//" + scriptURL.hostname + "/wdf-common/age-gate-otp/"+_this.sanitizer(_this.globalDomain)+"/ag-config.json";
	console.log("Getting conf from " + configURL);
    return fetch(configURL).then(response => response.text())
    .then(json => {
        return JSON.parse(json);       
    }).catch(function() {
        console.log("error ag config");
    });
};

ageGateOTP.prototype.getLegalAgeList = function () {
    let _this = this;

    var legalAgeListURL = scriptURL.protocol + "//" + scriptURL.hostname + "/wdf-common/age-gate-otp/ag-legalagelist.json";
    return fetch(legalAgeListURL).then(response => response.text())
    .then(json => {
        return JSON.parse(json);
    }).catch(function () {
        console.log("error legalagelist");
    });
};

ageGateOTP.prototype.geolocalizationService = function () {
    let _this = this;
    let geolocationService = 'https://test.df-controltower.mycampari.com/pp/wp-json/api/v1/geolocation'; //OLD: http://ip-api.com/json/
    
    return fetch(geolocationService).then(response => response.text())
    .then(json => {
        console.log(JSON.parse(json));
        return JSON.parse(json);
    }).catch(function () {
        console.log("error geolocalization");
    });
};

ageGateOTP.prototype.initListeners = function () {
    let _this = this;

    /* COUNTRY SELECTOR LISTENERS */
    _this.htmlStructure.on('click', '.ag-select_toggle', function(){
        jQuery(this).toggleClass('_open');
        _this.htmlStructure.find('.ag-select_menu').toggle();
    });

    _this.htmlStructure.on('click', '.ag-select_menu_i', function(){
        let countryCode = jQuery(this).attr('data-code');
        _this.setCountry(countryCode);
    });
    /* END COUNTRY SELECTOR LISTENERS */

    /* INPUT LISTENERS */
    _this.htmlStructure.find('input[max]:not([max=""])').on('input', function (ev) {
        let maxlength = jQuery(this).attr('max').length;
        let v = jQuery(this).val();
        
        //verify what data type current input div has.
        let _currDataType="full";
        if (jQuery(".ag-inputs[data-type='progressive']").is(':visible')) {
            _currDataType="progressive";
        }
        
        if (v && v.length >= maxlength) {
            jQuery(this).val(v.substr(0, maxlength));
            
            let allInputFilled=true;
            jQuery('.ag-inputs[data-type="'+_currDataType+'"] input').each(function() {
                if(jQuery(this).parent().is(':visible') && jQuery(this).val() === '') {
                    allInputFilled = false;
                }
            });
            if(allInputFilled){
                document.activeElement.blur();
            }
            else{
                jQuery(this).parent().next().find('input[type="number"]').focus();
            }
            
        }
    });


    _this.htmlStructure.find('.ag-inputs[data-type="full"] input').on('blur', function (ev) {
        let field_type = jQuery(this).attr('data-name');
        _this.htmlStructure.find('.error_age').hide();

        switch (field_type) {
            case 'year_f':
                _this.validateYear();
                break;
            case 'month_f':
                _this.validateMonth();
                break;
            case 'day_f':
                _this.checkDayByMonth();
                break;        
            default:
                break;
        }
        _this.checkCompleteDate();
    });

    /* BUTTON LISTENERS */
    _this.htmlStructure.on('click', '.submit_btn', function(){
        console.log('onsubmit');
        _this.onSubmit();
    });

    /* BUTTON LISTENERS */
    _this.htmlStructure.on('click', '.ag-buttons .sn_btn', function(){
        _this.htmlStructure.find('.ag-buttons .sn_btn').removeClass('selected');
        jQuery(this).addClass('selected');

        if(jQuery(this).val() == 'y'){
            _this.htmlStructure.find('.submit_btn').removeAttr('disabled');
        } else {
            _this.htmlStructure.find('.submit_btn').attr('disabled', 'disabled');
        }
    });

    /* progressive LISTENERS */
    _this.htmlStructure.find('.ag-inputs[data-type="progressive"] input').on('blur', function (ev) {
        _this.checkAgeProgressive();
    });
};

ageGateOTP.prototype.onSubmit = function () {
    let _this = this;
    let birthYear = '';
    let birthMonth = '';
    let birthDay = '';

    switch (_this.type) {           
        case 'simple':
            let selectedValue = _this.htmlStructure.find('.ag-buttons .sn_btn.selected').val();  
            
            console.log(selectedValue);

            if (selectedValue == 'y') {
                console.log("valid age");
                _this.htmlStructure.removeClass('_show');
                jQuery('body').removeClass('overflowHidden');
                _this.setCookie("age-gate-ok", true, "10");

                _this.checkAndDoRedirect();
                // if (_this.htmlStructure.find('#remember').is(':checked')) {
                //     _this.setCookie("ag-remember", `${birthDay},${birthMonth},${birthYear}`, "20");
                // } else {
                //     _this.setCookie('ag-remember', '', -1)
                // }
            }
            break;
        case 'progressive':
            birthYear = _this.htmlStructure.find('.ag-inputs[data-type="progressive"] [data-name="year_f"]').val();
            birthMonth = _this.htmlStructure.find('.ag-inputs[data-type="progressive"] [data-name="month_f"]').val();
            birthDay = _this.htmlStructure.find('.ag-inputs[data-type="progressive"] [data-name="day_f"]').val();

            _this.htmlStructure.removeClass('_show');
            jQuery('body').removeClass('overflowHidden');
            _this.setCookie("age-gate-ok", true, "10");

            if (_this.htmlStructure.find('#remember').is(':checked')) {
                _this.setCookie("ag-remember", `${birthDay},${birthMonth},${birthYear}`, "20");
            } else {
                _this.setCookie('ag-remember', '', -1)
            }

            _this.checkAndDoRedirect();
            break;
        default:
            birthYear = _this.htmlStructure.find('._y input').val();
            birthMonth = _this.htmlStructure.find('._m input').val();
            birthDay = _this.htmlStructure.find('._d input').val();

            let parsedDate = Date.parse(birthYear + "-" + birthMonth + "-" + birthDay);
            let now = new Date().getTime();
            let leapYear = ((Math.floor(_this.minAge / 4)) * 3600 * 24 * 1000);
            let userAge = (now - parsedDate - leapYear) / 1000 / 60 / 60 / 24 / 365;

            if(userAge >= _this.minAge) { //valid &&
                console.log("valid age");
                _this.htmlStructure.removeClass('_show');
                jQuery('body').removeClass('overflowHidden');
                _this.setCookie("age-gate-ok", true, "10");

                if (_this.htmlStructure.find('#remember').is(':checked')) {
                    _this.setCookie("ag-remember", `${birthDay},${birthMonth},${birthYear}`, "20");
                } else {
                    _this.setCookie('ag-remember', '', -1)
                }

                _this.checkAndDoRedirect();
            } else {
                _this.htmlStructure.find('.error_age').show();
            }
            break;
    }
    localStorage.setItem('cmpr-age-gate-year', birthYear);
    localStorage.setItem('cmpr-age-gate-month', birthMonth);
    localStorage.setItem('cmpr-age-gate-day', birthDay);

};

ageGateOTP.prototype.checkAndDoRedirect = function () {
    let _this = this;
    let currentUrl = window.location.href; // Full URL of the current page

    // Check if the current URL is the US store domain
    if (currentUrl.includes('us-shop.aperol.com')) {
        // If on the US store, replace the URL with the same path but without redirectPath
	console.log('On the US store');
        window.location.replace(window.location.origin);
    } else {
        // Check if redirectPath is set
        if (_this.redirectPath != null ) {
            let current = window.location.pathname; // Path part of the current URL
            // If the current path is the homepage
            if (current == '/') {
                console.log('Is the homepage.');
                window.location.replace(window.location.origin + _this.redirectPath + window.location.search);
            } else {
                console.log('Not on the homepage.');
	    }
	    } else if (_this.redirectPathUs != null) {
		console.log('Redirecting to the US store.');
		window.location.replace('https://us-shop.aperol.com');
	    }
        }
    }
};


ageGateOTP.prototype.setCountry = function (code, geolocalization = 0, isFirst = 0) {
    let _this = this;

    let selectedCountry = _this.configuration.countries.find(item => item.code.toUpperCase() === code.toUpperCase());

    if(selectedCountry == null || typeof(selectedCountry) == 'undefined'){
        selectedCountry = _this.configuration.default;
    }

    let countryName = typeof(selectedCountry.country) != 'undefined' ? selectedCountry.country : 'International';
    let countryCode = typeof(selectedCountry.code) != 'undefined' ? selectedCountry.code.toLowerCase() : 'int';
    _this.redirectPath = typeof(selectedCountry.redirectPath) != 'undefined' ? selectedCountry.redirectPath : null;
    _this.redirectPathUSA = typeof(selectedCountry.redirectPathUSA) != 'undefined' ? selectedCountry.redirectPathUSA : null;

    let translations = selectedCountry.translations;
    _this.dateFormat = selectedCountry.formatDate;

    if(selectedCountry.type != null){
        _this.type = selectedCountry.type;
    }

    if(translations == null || typeof(translations) == 'undefined'){
        translations = _this.configuration.default.translations;
    }

    let hideLayoutBox = 0;

    if(!isFirst || (isFirst && geolocalization)){
        _this.htmlStructure.find('.ag-country_name').text(countryName);
        _this.htmlStructure.find('.ag-select_toggle > img').attr('src', scriptURL.protocol + "//" + scriptURL.hostname + "/wdf-common/age-gate-otp/flags/60x40/"+countryCode+".png");
        _this.htmlStructure.find('.ag-select_toggle > img').show();
        _this.htmlStructure.find('.ag-select_menu').hide();
    } else {
        let selectLabel = typeof(translations.selectLabel) != 'undefined' ?  translations.selectLabel : "Select Your Country/Region"
        _this.htmlStructure.find('.ag-country_name').text(selectLabel);
        _this.htmlStructure.find('.ag-select_toggle > img').hide();
        _this.htmlStructure.find('.ag-select_menu').hide();
        hideLayoutBox = 1;
    }

    _this.cleanModal();
    _this.setLayout(hideLayoutBox);
    _this.switchDateFormat();
    _this.setLegalAge(code);
    _this.switchLanguage(translations);

    if(geolocalization){
        _this.htmlStructure.find('.geolocation_message').show();
    } else {
        _this.htmlStructure.find('.geolocation_message').hide();
    }
};

ageGateOTP.prototype.setLegalAge = function (code) {
    let _this = this;
    let selectedCountry = _this.legalAgeList.countries.find(item => item.code === code);

    if(selectedCountry == null || typeof(selectedCountry) == 'undefined'){
        selectedCountry = _this.legalAgeList.default;
    }

    _this.minAge = parseInt(selectedCountry.age);
};

ageGateOTP.prototype.cleanModal = function () {
    let _this = this;
    _this.htmlStructure.find('input[type="text"]').val('');
    _this.htmlStructure.find('input[type="number"]').val('');
    _this.htmlStructure.find('.submit_btn').attr('disabled', 'disabled');
    _this.htmlStructure.find('#remember').prop('checked', false);
    _this.htmlStructure.find('button').removeClass('selected');
    _this.htmlStructure.find('[data-type="progressive"] .form-group-1').hide();
    _this.htmlStructure.find('[data-type="progressive"] .form-group-1').first().show();
    _this.htmlStructure.find('.error_date').hide();
    _this.htmlStructure.find('.error_age').hide();
};

ageGateOTP.prototype.switchLanguage = function (translations) {
    let _this = this;
    _this.htmlStructure.find('.main_text').html(translations.title);
    _this.htmlStructure.find('.remember_text').text(translations.remember);
    _this.htmlStructure.find('.ag-disclaimer').html(translations.terms);
    _this.htmlStructure.find('.submit_btn').text(translations.submit);
    _this.htmlStructure.find('.error_date').text(translations.errors.invalidDate);
    _this.htmlStructure.find('.error_age').text(translations.errors.invalidAge);
    _this.htmlStructure.find('.geolocation_message').text(translations.locationMessage);

    _this.htmlStructure.find('#y_btn').text(translations.yesBtn);
    _this.htmlStructure.find('#n_btn').text(translations.noBtn);
};

ageGateOTP.prototype.replacePlaceholder = function (text) {
    let _this = this;
    
    let default_customization = { 
        "background-color": "#ffffff", 
        "input-bg-color": "#ffffff",
        "submit-bg-color": "#ba0c2f",
        "submit-disabled-bg-color": "#6D798A",
        "logo-url" : "none"
    };

    let replacements = default_customization;

    if(_this.configuration.customization != null && typeof(_this.configuration.customization) != 'undefined'){
        replacements = jQuery.extend(default_customization, _this.configuration.customization);
    }

    text = text.replace(/__(.*?)__/g, function(all) { //OLD REGEX /__\w+__/g
        let tag = all.replaceAll('__', '');
        return replacements[tag] || all;
    });

    return text;
};


ageGateOTP.prototype.setLayout = function (hideLayoutBox = 0) {
    let _this = this;

    _this.htmlStructure.find('.layout_box').hide();

    if(!hideLayoutBox){
        switch (_this.type) {
            case "simple":
                _this.htmlStructure.find('[data-type="simple"]').css('display','flex');
                break;
            case "progressive":
                _this.htmlStructure.find('[data-type="progressive"]').show();
                break;
            default:
                _this.htmlStructure.find('[data-type="full"]').show();
                break;
        }
    }    
};


/**
 * Update the order of the input fields appear
 */
ageGateOTP.prototype.switchDateFormat = function () {
    let _this = this;

    switch (_this.dateFormat) {
        case "yyyy/mm/dd":
            _this.setFieldOrder('._y', '._d');
            break;
        case "mm/dd/yyyy":
            _this.setFieldOrder('._m', '._y');
            break;
        default:
            _this.setFieldOrder('._d', '._y');
            break;
    }
};

ageGateOTP.prototype.populateCountrySelect = function () {
    let _this = this;
    
    let selectDiv = _this.htmlStructure.find('.ag-select_menu .ag-select_menu_in');
    jQuery(selectDiv).empty();

    let defaultCode = typeof(_this.configuration.default.code) != 'undefined' ? _this.configuration.default.code : 'int';
    let defaultCountryName = typeof(_this.configuration.default.country) != 'undefined' ? _this.configuration.default.country : 'International';
    appendOption(defaultCode, defaultCountryName);

    jQuery.each(_this.configuration.countries, function(k,v){
        let countryCode = v.code.toLowerCase();
        let countryName = v.country;

        appendOption(countryCode, countryName);
    });

    function appendOption(countryCode, countryName){
        let optionHtml = '<div class="ag-select_menu_i" data-code="'+countryCode+'"><img src="' + scriptURL.protocol + "//" + scriptURL.hostname + '/wdf-common/age-gate-otp/flags/60x40/'+countryCode+'.png" alt="'+countryName+' flag">'+countryName+'</div>';
        jQuery(selectDiv).append(optionHtml);        
    }
};

/**
 * Change the order of date field, based on date format of selected country
 * @param {string} first - element that appear first
 * @param {string} last - element that appear last
 */
ageGateOTP.prototype.setFieldOrder = function (first, last) {
    let _this = this;
    let firstElement = _this.htmlStructure.find(first);
    let lastElement = _this.htmlStructure.find(last);
    _this.htmlStructure.find('.ag-inputs[data-type="full"]').prepend(firstElement);
    _this.htmlStructure.find('.ag-inputs[data-type="full"]').append(lastElement);
};


ageGateOTP.prototype.validateDay = function (maxDay = 31, type = 'full') {
    let _this = this;
    let dayValue = _this.htmlStructure.find('[data-type="'+type+'"] [data-name="day_f"]').val();
    let day = parseInt(('0' + dayValue).substr(-2));
    let validDay = day > 0 && day <= maxDay;

    console.log('validate day by MAXDAY: ' + maxDay);
    if (!validDay && dayValue != '') {
        _this.htmlStructure.find('[data-type="'+type+'"] [data-name="day_f"]').addClass("is-invalid");
    } else {
        _this.htmlStructure.find('[data-type="'+type+'"] [data-name="day_f"]').removeClass("is-invalid");
    }
};

ageGateOTP.prototype.validateMonth = function (type = 'full') {
    let _this = this;
    let monthField = _this.htmlStructure.find('[data-type="'+type+'"] [data-name="month_f"]');
    let monthValue = jQuery(monthField).val();
    let month = parseInt(('0' + monthValue).substr(-2));
    let validMonth = month > 0 && month <= 12;

    if (validMonth) {
        jQuery(monthField).removeClass("is-invalid");     
        _this.checkDayByMonth(type);        
    } else {
        jQuery(monthField).addClass("is-invalid");
    }
};

ageGateOTP.prototype.checkDayByMonth = function (type) {
    let _this = this;
    let month = parseInt(_this.htmlStructure.find('[data-type="'+type+'"] [data-name="month_f"]').val());

    switch (month) {
        case 4:
        case 6:
        case 9:
        case 11:
            _this.validateDay(30);
            break;
        case 2:
            _this.validateDay(29);
            break;
        default:
            _this.validateDay(31);
            break;
    }
};

ageGateOTP.prototype.validateYear = function (type = 'full') {
    let _this = this;

    let yearValue = _this.htmlStructure.find('[data-type="'+type+'"] [data-name="year_f"]').val();
    let year = ('' + yearValue).substr(-4);
    let date = new Date();
    let currYear = date.getFullYear();
    let validYear = year >= 1800 && year <= currYear;

    if(!validYear){
        _this.htmlStructure.find('[data-type="'+type+'"] [data-name="year_f"]').addClass("is-invalid");
        console.log('is not valid');
    } else {
        _this.htmlStructure.find('[data-type="'+type+'"] [data-name="year_f"]').removeClass("is-invalid");
        console.log('is valid');
    }
};

ageGateOTP.prototype.checkAgeProgressive = function () {
    let _this = this;
    let now = new Date().getTime();
    let leapYear = ((Math.floor(_this.minAge / 4)) * 3600 * 24 * 1000);

    let birthYear = _this.htmlStructure.find('.ag-inputs[data-type="progressive"] [data-name="year_f"]').val();
    _this.validateYear('progressive');

    let userAge = (now - Date.parse(birthYear) - leapYear) / 1000 / 60 / 60 / 24 / 365;

    let currYear = (new Date).getFullYear();
    let currMonth = (new Date).getMonth() + 1;

    _this.htmlStructure.find('.error_age').hide();
    _this.htmlStructure.find('.submit_btn').attr('disabled', 'disabled');

    if(userAge >= _this.minAge && (parseInt(birthYear) !== (parseInt(currYear) - _this.minAge) && !(_this.htmlStructure.find('[data-type="progressive"] [data-name="year_f"]').hasClass("is-invalid")))){
        _this.htmlStructure.find('.submit_btn').removeAttr('disabled');            
        _this.htmlStructure.find('.ag-inputs[data-type="progressive"] [data-name="month_f"]').parent().hide();
        _this.htmlStructure.find('.ag-inputs[data-type="progressive"] [data-name="day_f"]').parent().hide();
    } else if(userAge >= _this.minAge && parseInt(birthYear) === (parseInt(currYear) - _this.minAge)){
        if(_this.htmlStructure.find('.ag-inputs[data-type="progressive"] [data-name="month_f"]').parent().is(":visible")){
            let birthMonth = _this.htmlStructure.find('.ag-inputs[data-type="progressive"] [data-name="month_f"]').val();
            _this.validateMonth('progressive');
            userAge = (now - Date.parse(birthYear + '-' + birthMonth) - leapYear) / 1000 / 60 / 60 / 24 / 365;

            if(userAge >= _this.minAge && (parseInt(birthMonth) < (parseInt(currMonth)))){
                _this.htmlStructure.find('.submit_btn').removeAttr('disabled');            
                _this.htmlStructure.find('.ag-inputs[data-type="progressive"] [data-name="day_f"]').parent().hide();
            } else if(userAge >= _this.minAge && (parseInt(birthMonth) == (parseInt(currMonth)))){

                if(_this.htmlStructure.find('.ag-inputs[data-type="progressive"] [data-name="day_f"]').parent().is(":visible")){
                    let birthDay = _this.htmlStructure.find('.ag-inputs[data-type="progressive"] [data-name="day_f"]').val();
                    _this.validateDay('progressive');
                    userAge = (now - Date.parse(birthYear + '-' + birthMonth + '-' + birthDay) - leapYear) / 1000 / 60 / 60 / 24 / 365;
    
                    if(userAge >= _this.minAge){
                        _this.htmlStructure.find('.submit_btn').removeAttr('disabled');            
                    } else {
                        _this.htmlStructure.find('.error_age').show();
                    }
                } else {
                    _this.htmlStructure.find('.ag-inputs[data-type="progressive"] [data-name="day_f"]').parent().show();
                }               
            } else {
                _this.htmlStructure.find('.ag-inputs[data-type="progressive"] [data-name="day_f"]').parent().hide();
                _this.htmlStructure.find('.error_age').show();
            }
        } else {
            _this.htmlStructure.find('.ag-inputs[data-type="progressive"] [data-name="month_f"]').parent().show();
        }
    } else {
        _this.htmlStructure.find('.ag-inputs[data-type="progressive"] [data-name="month_f"]').parent().hide();
        _this.htmlStructure.find('.ag-inputs[data-type="progressive"] [data-name="day_f"]').parent().hide();
        _this.htmlStructure.find('.error_age').show();
    }
};

ageGateOTP.prototype.checkCompleteDate = function () {
    let _this = this;
    let checkOK = 1;

    //Add check on "visible" for others types
    _this.htmlStructure.find('.ag-inputs[data-type="full"] input').each(function(k,div){
        if(jQuery(div).hasClass('is-invalid') || jQuery(div).val() == ''){
            checkOK = 0;
        }
    });

    if(checkOK){
        _this.htmlStructure.find('.submit_btn').removeAttr('disabled');
    } else {
        _this.htmlStructure.find('.submit_btn').attr('disabled', 'disabled');
    }
};

ageGateOTP.prototype.populateField = function () {
    let _this = this;

    let cookie = _this.getCookie("ag-remember");

    if (cookie) {
        let ageCookie = cookie.split(",");
        _this.htmlStructure.find('[data-name="day_f"]').val(ageCookie[0]);
        _this.htmlStructure.find('[data-name="month_f"]').val(ageCookie[1]);
        _this.htmlStructure.find('[data-name="year_f"]').val(ageCookie[2]);

        _this.checkCompleteDate();
    }
}

/**
 * Function to set a cookie
 * @param {*} cname - cookie name
 * @param {*} cvalue - cookie value
 * @param {*} exdays - cookie duration
 */
ageGateOTP.prototype.setCookie = function (cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
};

/**
 * Retrieve cookie if is exist
 * @param {*} cname - cookie name
 * @returns 
 */
ageGateOTP.prototype.getCookie = function (cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return false;
};

ageGateOTP.prototype.sanitizer = function (str) {
    str = str.replace(/dev./g, ""); 
    str = str.replace(/stg./g, ""); 
    return str.replace(/[^\w.^-]/gi, function (c) {
        return '&#' + c.charCodeAt(0) + ';';
    });
};

ageGateOTP.prototype.checkResponse = function (res) {
    if (res.status == "fulfilled") {
        if (typeof (res) == "string") {
            res = JSON.parse(res);
        }
        return res.value;
    } else if (res.status == "rejected") {
        return null;
    }
};

var ageGate = new ageGateOTP();
ageGate.startAgeGate();
