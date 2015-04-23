function getStaticData() { return { actions: [{ id: 0, key: "PayNow", label: "Pay Now" }, { id: 1, key: "PayLater", label: "Pay Later" }, { id: 2, key: "Cancel", label: "Cancel" }], stateTypes: [{ id: 0, key: "a048000000KoC4CAAV", label: "DE", name: "Delaware" }, { id: 1, key: "a048000000KoC4EAAV", label: "FL", name: "Florida" }, { id: 2, key: "a048000000KoC4XAAV", label: "NV", name: "Nevada" }, { id: 3, key: "a048000000KoC45AAF", label: "AL", name: "Alabama" }, { id: 4, key: "a048000000KoC46AAF", label: "AK", name: "Alaska" }, { id: 5, key: "a048000000KoC47AAF", label: "AZ", name: "Arizona" }, { id: 6, key: "a048000000KoC48AAF", label: "AR", name: "Arkansas" }, { id: 7, key: "a048000000KoC49AAF", label: "CA", name: "California" }, { id: 8, key: "a048000000KoC4AAAV", label: "CO", name: "Colorado" }, { id: 9, key: "a048000000KoC4BAAV", label: "CT", name: "Connecticut" }, { id: 10, key: "a048000000KoC4DAAV", label: "DC", name: "District of Columbia" }, { id: 11, key: "a048000000KoC4FAAV", label: "GA", name: "Georgia" }, { id: 12, key: "a048000000KoC4GAAV", label: "HI", name: "Hawaii" }, { id: 13, key: "a048000000KoC4HAAV", label: "ID", name: "Idaho" }, { id: 14, key: "a048000000KoC4IAAV", label: "IL", name: "Illinois" }, { id: 15, key: "a048000000KoC4JAAV", label: "IN", name: "Indiana" }, { id: 16, key: "a048000000KoC4KAAV", label: "IA", name: "Iowa" }, { id: 17, key: "a048000000KoC4LAAV", label: "KS", name: "Kansas" }, { id: 18, key: "a048000000KoC4MAAV", label: "KY", name: "Kentucky" }, { id: 19, key: "a048000000KoC4NAAV", label: "LA", name: "Louisiana" }, { id: 20, key: "a048000000KoC4OAAV", label: "ME", name: "Maine" }, { id: 21, key: "a048000000KoC4PAAV", label: "MD", name: "Maryland" }, { id: 22, key: "a048000000KoC4QAAV", label: "MA", name: "Massachusetts" }, { id: 23, key: "a048000000KoC4RAAV", label: "MI", name: "Michigan" }, { id: 24, key: "a048000000KoC4SAAV", label: "MN", name: "Minnesota" }, { id: 25, key: "a048000000KoC4TAAV", label: "MS", name: "Mississippi" }, { id: 26, key: "a048000000KoC4UAAV", label: "MO", name: "Missouri" }, { id: 27, key: "a048000000KoC4VAAV", label: "MT", name: "Montana" }, { id: 28, key: "a048000000KoC4WAAV", label: "NE", name: "Nebraska" }, { id: 29, key: "a048000000KoC4YAAV", label: "NH", name: "New Hampshire" }, { id: 30, key: "a048000000KoC4ZAAV", label: "NJ", name: "New Jersey" }, { id: 31, key: "a048000000KoC4aAAF", label: "NM", name: "New Mexico" }, { id: 32, key: "a048000000KoC4bAAF", label: "NY", name: "New York" }, { id: 33, key: "a048000000KoC4cAAF", label: "NC", name: "North Carolina" }, { id: 34, key: "a048000000KoC4dAAF", label: "ND", name: "North Dakota" }, { id: 35, key: "a048000000KoC4eAAF", label: "OH", name: "Ohio" }, { id: 36, key: "a048000000KoC4fAAF", label: "OK", name: "Oklahoma" }, { id: 37, key: "a048000000KoC4gAAF", label: "OR", name: "Oregon" }, { id: 38, key: "a048000000KoC4hAAF", label: "PA", name: "Pennsylvania" }, { id: 39, key: "a048000000KoC4iAAF", label: "RI", name: "Rhode Island" }, { id: 40, key: "a048000000KoC4jAAF", label: "SC", name: "South Carolina" }, { id: 41, key: "a048000000KoC4kAAF", label: "SD", name: "South Dakota" }, { id: 42, key: "a048000000KoC4lAAF", label: "TN", name: "Tennessee" }, { id: 43, key: "a048000000KoC4mAAF", label: "TX", name: "Texas" }, { id: 44, key: "a048000000KoC4nAAF", label: "UT", name: "Utah" }, { id: 45, key: "a048000000KoC4oAAF", label: "VT", name: "Vermont" }, { id: 46, key: "a048000000KoC4pAAF", label: "VA", name: "Virginia" }, { id: 47, key: "a048000000KoC4qAAF", label: "WA", name: "Washington" }, { id: 48, key: "a048000000KoC4rAAF", label: "WV", name: "West Virginia" }, { id: 49, key: "a048000000KoC4sAAF", label: "WI", name: "Wisconsin" }, { id: 50, key: "a048000000KoC4tAAF", label: "WY", name: "Wyoming" }], entityTypes: [{ id: 0, key: "LLC", label: "LLC", incnowCode: "LLC", superType: null, endings: ["LLC", "L.L.C.", "Limited Liability Company"] }, { id: 1, key: "Corporation", label: "Corporation", incnowCode: "Incorporation", superType: null, endings: ["Inc", "Inc.", "Incorporated", "Co", "Co.", "Company", "Corp", "Corp.", "Corporation", "Ltd", "Ltd.", "Limited"] }, { id: 2, key: "LP", label: "LP", incnowCode: "LP", superType: null, endings: ["LP", "L.P.", "Limited Partnership"] }, { id: 3, key: "SeriesLLC", label: "Series LLC", incnowCode: "Series LLC", superType: 0, endings: ["LLC", "L.L.C.", "Limited Liability Company"] }, { id: 4, key: "NonProfitCorporation", label: "NP Corporation", incnowCode: "Non-Profit", superType: 1, endings: ["Inc", "Inc.", "Incorporated", "Co", "Co.", "Company", "Corp", "Corp.", "Corporation", "Ltd", "Ltd.", "Limited", "Association", "Club", "Foundation", "Fund", "Institute", "Society", "Union", "Syndicate"] }], salutationTypes: [{ id: 0, key: "Mr", label: "Mr." }, { id: 1, key: "Ms", label: "Ms." }, { id: 2, key: "Mrs", label: "Mrs." }, { id: 3, key: "Dr", label: "Dr." }, { id: 4, key: "Prof", label: "Prof." }], sopAcceptedViaTypes: [{ id: 0, key: "ProcessServer", label: "Process Server" }, { id: 1, key: "DeputySheriff", label: "Deputy Sheriff" }, { id: 2, key: "CertifiedMail", label: "Certified Mail" }, { id: 3, key: "FedEx", label: "FedEx" }, { id: 4, key: "Other", label: "Other" }], sopTypes: [{ id: 0, key: "SummonsAndComplaint", label: "Summons And Complaint" }, { id: 1, key: "Subpoena", label: "Subpoena" }, { id: 2, key: "Motion", label: "Motion" }, { id: 3, key: "Garnishment", label: "Garnishment" }, { id: 4, key: "Other", label: "Other" }], stateEntityTitles: [{ id: 0, key: "Member", label: "Member" }, { id: 1, key: "Manager", label: "Manager" }, { id: 2, key: "Director", label: "Director" }, { id: 3, key: "Stockholder", label: "Stockholder" }, { id: 4, key: "Series", label: "Series" }, { id: 5, key: "President", label: "President" }, { id: 6, key: "Treasurer", label: "Treasurer" }, { id: 7, key: "Secretary", label: "Secretary" }, { id: 8, key: "Partner", label: "Partner" }, { id: 9, key: "Agent", label: "Agent" }] }; }
function apiType(types, value) {
	var arr = $.grep(getStaticData()[types], function (item, i) {
		return item.id == value || item.key == value || item.incnowCode == value || item.name == value;
	});

	if (arr.length) return arr[0];
	else return null;
}

//auth via cookie #yummy







//api
function getAccount(success_callback, error_callback, ignore_cache, credentials) {
	credentials = credentials || session["credentials"];
	if (cache["account"] && !ignore_cache) success_callback(cache["account"]);
	else {
		var d = { id: credentials["accountId"], authKey: credentials["authKey"] };
		$.ajax({
			type: "GET",
			url: _baseapiurl + "account",
			data: d,
			dataType: "json",
			success: function (r) { cache["account"] = r; success_callback(r); },
			error: function (x, e) { error_callback(x, e); }
		});
	}
}
function getEntities(success_callback, error_callback, ignore_cache, credentials) {
	credentials = credentials || session["credentials"];
	if (cache["entities"] && !ignore_cache) success_callback(cache["entities"]);
	else {
		var d = { id: credentials["accountId"], authKey: credentials["authKey"] };
		$.ajax({
			type: "GET",
			url: _baseapiurl + "entities",
			data: d,
			dataType: "json",
			success: function (r) { cache["entities"] = r; success_callback(r); },
			error: function (x, e) { error_callback(x, e); }
		});
	}
}
function getInvoices(success_callback, error_callback, ignore_cache, credentials) {
	credentials = credentials || session["credentials"];
	if (cache["invoices"] && !ignore_cache) success_callback(cache["invoices"]);
	else {
		var d = { id: credentials["accountId"], authKey: credentials["authKey"] };
		$.ajax({
			type: "GET",
			url: _baseapiurl + "invoices",
			data: d,
			dataType: "json",
			success: function (r) { cache["invoices"] = r; success_callback(r); },
			error: function (x, e) { error_callback(x, e); }
		});
	}
}
function getTransactions(success_callback, error_callback, ignore_cache, credentials) {
	credentials = credentials || session["credentials"];
	if (cache["transactions"] && !ignore_cache) success_callback(cache["transactions"]);
	else {
		var d = { id: credentials["accountId"], authKey: credentials["authKey"] };
		$.ajax({
			type: "GET",
			url: _baseapiurl + "transactions",
			data: d,
			dataType: "json",
			success: function (r) { cache["transactions"] = r; success_callback(r); },
			error: function (x, e) { error_callback(x, e); }
		});
	}
}
function getSOPs(success_callback, error_callback, ignore_cache, credentials) {
	credentials = credentials || session["credentials"];
	if (cache["sops"] && !ignore_cache) success_callback(cache["sops"]);
	else {
		var d = { id: credentials["accountId"], authKey: credentials["authKey"] };
		$.ajax({
			type: "GET",
			url: _baseapiurl + "sops",
			data: d,
			dataType: "json",
			success: function (r) { cache["sops"] = r; success_callback(r); },
			error: function (x, e) { error_callback(x, e); }
		});
	}
}
function getCountries(success_callback, error_callback, ignore_cache, credentials) {
	credentials = credentials || session["credentials"];
	if (cache["countries"] && !ignore_cache) success_callback(cache["countries"]);
	else {
		var d = { id: "country" };
		$.ajax({
			type: "GET",
			url: _baseapiurl + "dataset",
			data: d,
			dataType: "json",
			success: function (r) { cache["countries"] = r; success_callback(r); },
			error: function (x, e) { error_callback(x, e); }
		});
	}
}
function getFiles(success_callback, error_callback, ignore_cache, credentials) {
	credentials = credentials || session["credentials"];
	if (cache["files"] && !ignore_cache) success_callback(cache["files"]);
	else {
		var d = { id: credentials["accountId"], authKey: credentials["authKey"] };
		$.ajax({
			type: "GET",
			url: _baseapiurl + "files",
			data: d,
			dataType: "json",
			success: function (r) { cache["files"] = r; success_callback(r); },
			error: function (x, e) { error_callback(x, e); }
		});
	}
}
function getSurvey(id, success_callback, error_callback) {
	var d = { id: id };
	$.ajax({
		type: "GET",
		url: _baseapiurl + "survey",
		data: d,
		dataType: "json",
		success: function (r) { success_callback(r); },
		error: function (x, e) { error_callback(x, e); }
	});
}

//updates
function updateContactInfo(data, success_callback, error_callback, credentials) {
	data = data || {};
	credentials = credentials || session["credentials"];

	var d = data;

	var arr = [];
	arr.push("id=" + credentials["accountId"]);
	arr.push("authkey=" + credentials["authKey"]);
	url = _baseapiurl + "contactInfo?" + arr.join("&");

	$.ajax({
		type: "POST",
		url: url,
		data: d,
		dataType: "json",
		success: function (r) { success_callback(r); },
		error: function (x, e) { error_callback(x, e); }
	});
}
function addNewPayment(data, success_callback, error_callback, credentials) {
	data = data || {};
	credentials = credentials || session["credentials"];

	var d = data;
	d["account"] = { id: credentials["accountId"], authKey: credentials["authKey"] };

	url = _baseapiurl + "newcreditcard";

	$.ajax({
		type: "POST",
		url: url,
		data: d,
		dataType: "json",
		success: function (r) { success_callback(r); },
		error: function (x, e) { error_callback(x, e); }
	});
}
function addNewFile(data, success_callback, error_callback, credentials) {
	data = data || {};
	credentials = credentials || session["credentials"];
	
	var d = new FormData();
	d.append("file", data["file"]);

	var arr = [];
	arr.push("accountid=" + credentials["accountId"]);
	arr.push("authkey=" + credentials["authKey"]);
	arr.push("stateentityid=" + data["stateentityid"]);
	arr.push("description=" + data["description"]);
	url = _baseapiurl + "file?" + arr.join("&");

	$.ajax({
		type: "POST",
		url: url,
		data: d,
		dataType: "json",
		success: function (r) { success_callback(r); },
		error: function (x, e) { error_callback(x, e); },
		processData: false,
		contentType: false,
	});
}
function submitSurvey(data, success_callback, error_callback, credentials) {
	data = data || {};
	credentials = credentials || session["credentials"];

	var d = data;
	d["account"] = { id: credentials["accountId"], authKey: credentials["authKey"] };

	url = _baseapiurl + "survey";

	$.ajax({
		type: "POST",
		url: url,
		data: d,
		dataType: "json",
		success: function (r) { success_callback(r); },
		error: function (x, e) { error_callback(x, e); }
	});
}

//page
$(".navbar-collapse ul li a:not(.dropdown-toggle)").on("click touchstart", function () {
	$(".navbar-toggle:visible").trigger("click");
});
$("#navbar a[data-toggle='tab']").on("show.bs.tab", function (e) {
	var $target = $(e.target);

	if ($target.data("authrequired") && !isAuthenticated()) {
		showSigninDialog($target.attr("href"));
		return false;
	}

	try {
		dataLayer.push({
			'event': 'VirtualPageview',
			'virtualPageURL': $target.attr("href"),
		});
	} catch (e) {

	}
});
function showSigninDialog(redirect_to_view) {
	$("#alert_signin_fail").hide();
	$("#form_signin [name='redirect']").val(redirect_to_view);
	$("#modal_signin").modal("show");
}
function showSurveyDialog() {
	var $modal = $("#modal_submit_survey");
	var $form = $("#form_submit_survey");

	var sf = function (r) {
		var survey = r;
		var $s = createSurveyElement(survey);
		$form.html("").append($s);
		$modal.modal("show");
	}

	var ef = function (x) {
		$form.text("Error getting survey");
		$modal.modal("show");
	}

	getSurvey(1, sf, ef);
}
function formatMoney(n) { var c = 2, d = ".", t = ",", s = n < 0 ? "-" : "", i = parseInt(n = Math.abs(+n || 0).toFixed(c)) + "", j = (j = i.length) > 3 ? j % 3 : 0; return "$" + s + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : "") }
function clearCache(key) {
	if (key) {
		cache[key] = null;
	}
	else {
		cache = {};
	}
}

//views
$("#navbar a[href='#entities']").on("shown.bs.tab", function (e) {
	var $tab = $($(e.currentTarget).attr("href"));
	drawEntitiesTab($tab);
});
$("#navbar a[href='#billing']").on("shown.bs.tab", function (e) {
	var $tab = $($(e.currentTarget).attr("href"));
	drawBillingTab($tab);
});
$("#navbar a[href='#sop']").on("shown.bs.tab", function (e) {
	var $tab = $($(e.currentTarget).attr("href"));
	drawSOPTab($tab);
});
$("#navbar a[href='#settings']").on("shown.bs.tab", function (e) {
	var $tab = $($(e.currentTarget).attr("href"));
	drawSettingsTab($tab);
});

function drawEntitiesTab($tab, active_id) {
	var $content = $tab.find("[data-content='entities']");


	$("#btn_add_file").off("click").on("click", function () {
		var data = {};

		var $modal = $("#modal_add_file");
		var $form = $("#form_add_file");
		$.each($form.serializeArray(), function (i, item) { data[item["name"]] = item["value"]; });
		try { data["file"] = $form.find("[name='file']")[0].files[0]; } catch (e) { }

		var sf_add_file = function () {
			$form.find(":input").val("");
			clearCache("files");
			drawEntitiesTab($tab, data["stateentityid"]);
			$modal.modal("hide");
		};

		var ef_add_file = function (x) {
			//$payment.html("Error Adding Payment");
			var msg = "";
			try { msg = JSON.parse(x["responseText"])["ExceptionMessage"]; } catch (e) { }
			if (!msg.length) msg = "Error Adding Document";
			alert(msg);
		};

		addNewFile(data, sf_add_file, ef_add_file);
	});


	var sf = function (r) {
		var entities = r;

		var sf_file = function (r_file) {
			var files = r_file;
			var $e = createEntitiesElement(entities, files, active_id);
			$content.html("").append($e);
		}
		var ef_file = function () {
			var $e = createEntitiesElement(entities, [], active_id);
			$content.html("").append($e);
		}
		getFiles(sf_file, ef_file);
	};
	var ef = function () {
		$content.html("Error getting entities");
	};
	getEntities(sf, ef);
}
function drawBillingTab($tab) {
	var $content_t = $tab.find("[data-content='transactions']");
	var $content_i = $tab.find("[data-content='invoices']");

	var sf_t = function (r, r_i) {
		var transactions = r;
		var $e = createTransactionsElement(transactions, r_i);
		$content_t.html("").append($e);
	};
	var ef_t = function () {
		$content_t.html("Error getting transactions");
	};

	var sf_i = function (r) {
		var invoices = r;
		var $e = createInvoicesElement(invoices);
		$content_i.html("").append($e);
		getTransactions(function (trans) { sf_t(trans, invoices) }, ef_t);
	};
	var ef_i = function () {
		$content_i.html("Error getting invoices");
		getTransactions(sf_t, ef_t);
	};
	getInvoices(sf_i, ef_i);
}
function drawSOPTab($tab) {
	var $content = $tab.find("[data-content='sops']");

	var sf = function (r) {
		var sops = r;
		var $e = createSOPsElement(sops);
		$content.html("").append($e);
	};
	var ef = function () {
		$content.html("Error getting sop");
	};
	getSOPs(sf, ef);
}
function drawSettingsTab($tab) {
	var $content_contact = $tab.find("[data-content='contact']");
	var $content_credentials = $tab.find("[data-content='credentials']");
	var $content_payment = $tab.find("[data-content='payment']");

	$("#btn_add_payment").off("click").on("click", function () {
		var data = {};

		var $modal = $("#modal_add_payment");
		var $form = $("#form_add_payment");
		$.each($form.serializeArray(), function (i, item) { data[item["name"]] = item["value"]; });

		var sf_add_payment = function () {
			$form.find(":text").val("");
			clearCache("account");
			drawSettingsTab($tab);
			$modal.modal("hide");
		};

		var ef_add_payment = function (x) {
			//$payment.html("Error Adding Payment");
			var msg = "";
			try { msg = JSON.parse(x["responseText"])["ExceptionMessage"]; } catch (e) { }
			if (!msg.length) msg = "Error Adding Payment";
			alert(msg);
		};

		addNewPayment(data, sf_add_payment, ef_add_payment);
	});

	var sf = function (r) {
		var account = r;

		var sf_country = function (r_country) {
			var countries = r_country;
			var $contact = createContactElement(account, countries);

			$contact.find("[name='btn_update_contact']").on("click", function () {
				var data = {};
				var $form = $contact.find("#form_contact");
				$.each($form.serializeArray(), function (i, item) { data[item["name"]] = item["value"]; });

				var sf_update_contact = function () {
					clearCache("account");
					drawSettingsTab($tab);
				};

				var ef_update_contact = function () {
					$contact.html("Error Updating Contact");
				};

				updateContactInfo(data, sf_update_contact, ef_update_contact);
			});

			$content_contact.html("").append($contact);
		}
		var ef_country = function () {
			var $contact = createContactElement(account, []);
			$content_contact.html("").append($contact);
		}
		getCountries(sf_country, ef_country);

		var $credentials = createCredentialsElement(account);
		$content_credentials.html("").append($credentials);

		var $payment = createPaymentElement(account);
		$content_payment.html("").append($payment);
	};
	var ef = function () {
		$content_contact.html("Error getting contact");
	};
	getAccount(sf, ef);
}

function createEntitiesElement(entities, files, active_id) {
	files = files || [];

	var active_i = 0;
	$.each(entities, function (i, item) {
		var ids = [item["id"]];
		$.each(item["entityInfos"], function (eii, eiitem) { ids.push(eiitem["id"]); });
		if ($.inArray(active_id, ids) > -1) { active_i = i; return false; }
	});

	var a_id = "entities_" + Math.random().toString().replace(".", "");
	var $accordion = $("<div>").addClass("panel-group").attr("id", a_id);
	$.each(entities, function (i, item) {
		var active = i == active_i;
		var id = "entity_panel_" + i;
		var $target = $("<a>").text(item.name).attr("href", "#" + id).attr("data-toggle", "collapse").attr("data-parent", "#" + a_id);
		if (item.ein) $target.append(" (" + item.ein + ")");
		var $title = $("<h4>").addClass("panel-title").append($target);
		var $heading = $("<div>").addClass("panel-heading").append($title);
		var $right = $("<div>").addClass("col-md-6").append($("<h2>").text("Recommended Services")).append(createEntitySalesElement(item));
		var $left = $("<div>").addClass("col-md-6").append($("<h2>").text("Parties ").append($("<small>").text("Aliquam nec sem ut dui accumsan finibus."))).append(createEntityPartiesElement(item["parties"]));
		var $body = $("<div>").addClass("panel-body").append($("<div>").addClass("row").append($left).append($right)).append($("<br>")).append($("<div>").addClass("row").append($("<div>").addClass("col-md-10 col-md-offset-1").append(createEntityStateEntitiesElement(item["entityInfos"], files, active_id))));
		var $collapse = $("<div>").attr("id", id).addClass("panel-collapse collapse " + (active ? "in" : "")).append($body);
		var $panel = $("<div>").addClass("panel panel-default").append($heading).append($collapse);
		$accordion.append($panel);
	});
	return $accordion
}
function createEntitySalesElement(entity, credentials) {

	var url = "";
	credentials = credentials || session["credentials"];
	if (credentials) {
		var arr = [];
		arr.push("accountid=" + credentials["accountId"]);
		arr.push("authkey=" + credentials["authKey"]);
		arr.push("type=" + "existing");

		url = "https://secure.incnow.com/order/default.aspx?" + arr.join("&");
	}


	var $sales = $("<div>");
	$sales.append($("<p>").text("Maecenas mollis libero et suscipit ullamcorper. Sed mattis ex eget tempus elementum. Donec dictum magna non lacinia laoreet. Phasellus eleifend, neque ac interdum rhoncus, nisi odio dapibus lorem, in rhoncus enim diam eu augue."));
	$sales.append($("<p>").append($("<a>").attr("href", url).attr("target", "_blank").addClass("btn btn-default").html("Buy Now &raquo;")));
	return $sales;
}
function createEntityPartiesElement(parties) {
	var $thead = $("<thead>").append($("<tr>").append($("<th>").text("Name")).append($("<th>").text("Role")));
	var $tbody = $("<tbody>");
	$.each(parties, function (i, item) {
		var n = "";
		var ci = item["contactInfo"];
		if (ci) {
			var fn = ci["firstName"] || "";
			var ln = ci["lastName"] || "";
			n = fn + " " + ln;
		}

		var titles = [];
		$.each(titles, function (ti, titem) { titles.push(apiType("stateEntityTitles", titem)["label"]); });

		var $tr = $("<tr>");
		$tr.append($("<td>").text(n));
		$tr.append($("<td>").text(item["titles"] ? item["titles"].join(", ") : ""));
		$tbody.append($tr);
	});
	var $t = $("<table>").addClass("table table-hover table-condensed").append($thead).append($tbody);
	return $t;
}
function createEntityStateEntitiesElement(stateEntities, files, active_id) {
	files = files || [];

	var active_i = 0;
	$.each(stateEntities, function (i, item) { if (item["id"] == active_id) { active_i = i; return false; } });

	var id = "state_entities_" + Math.random().toString().replace(".", "");
	var $tablist = $("<ul>").addClass("nav nav-tabs nav-justified");
	var $tabcontent = $("<div>").addClass("tab-content");
	$.each(stateEntities, function (i, item) {
		var active = i == active_i;
		var seid = id + "_panel_" + i;
		var $target = $("<a>").text(item.stateType).attr("href", "#" + seid).attr("data-toggle", "tab");
		var $tab = $("<li>").addClass(active ? "active" : "").append($target);
		$tablist.append($tab);

		var se_files = $.grep(files, function (fitem, fi) {
			var f_se = fitem["entityInfo"] || {};
			return f_se["id"] == item["id"];
		});

		var $doc = $("<div>").addClass("col-md-8").append($("<h2>").text("Documents ").append($("<small>").text("Aliquam porta urna eu justo posuere."))).append(createStateEntityFilesElement(item, se_files));
		var $file = $("<div>").addClass("col-md-4").append($("<h2>").text("Entity ").append($("<small>").text("Entesque eu metus."))).append(createStateEntityInfoElement(item));
		var $body = $("<div>").addClass("tab-pane with-border " + (active ? "active" : "")).attr("id", seid).append($("<div>").addClass("row").append($file).append($doc));
		$tabcontent.append($body);
	});
	var $tabs = $("<div>").attr("id", id).append($tablist).append($tabcontent);
	return $tabs;
}
function createStateEntityInfoElement(stateEntity) {
	var $info = $("<dl>");
	if (stateEntity.name) $info.append($("<dt>").text("Name")).append($("<dd>").text(stateEntity.name));
	if (stateEntity.fileNumber) $info.append($("<dt>").text("File Number")).append($("<dd>").text(stateEntity.fileNumber));
	if (stateEntity.incorporationDate) $info.append($("<dt>").text("Incorporated")).append($("<dd>").text(new Date(stateEntity.incorporationDate).toLocaleDateString()));
	$info.append($("<dt>").text("Status")).append($("<dd>").text(stateEntity.active ? "Active" : "Inactive"));
	return $info;
}
function createStateEntityFilesElement(stateEntity, files) {
	files = files || [];

	var $thead_tr = $("<tr>");
	$thead_tr.append($("<th>").text("Name"));
	$thead_tr.append($("<th>").text("Description"));
	//$thead_tr.append($("<th>").text("Created"));
	$thead_tr.append($("<th>").text(""));
	var $thead = $("<thead>").append($thead_tr);

	var $tbody = $("<tbody>");
	$.each(files, function (i, item) {
		var id = "file_row_" + i;
		var $tr = $("<tr>").attr("id", id);

		var download_element = $("<a>").addClass("btn btn-xs btn-default").text("Download").attr("href", createFileDownloadLink(item)).attr("target", "_blank");

		$tr.append($("<td>").text(item["filename"]));
		$tr.append($("<td>").text(item["description"]));
		//$tr.append($("<td>").text(item["created"] ? new Date(item["created"]).toLocaleDateString() : ""));
		$tr.append($("<td>").append(download_element));
		$tbody.append($tr);
	});

	var f_id = "files_" + Math.random().toString().replace(".", "");
	var $files = $("<table>").addClass("table table-striped table-hover").attr("id", f_id).append($thead).append($tbody);


	var $btn = $("<button>").addClass("btn btn-default").text("Upload New");
	$btn.on("click", function () {
		$("#modal_add_file #stateentityname").val(createEntityInfoElement(stateEntity).text());
		$("#modal_add_file [name='stateentityid']").val(stateEntity["id"]);
		$("#modal_add_file").modal("show");
	});

	var $wrapper = $("<div>");

	//$wrapper.append($("<p>").text("Aliquam porta urna eu justo posuere, vel aliquam ex commodo. Curabitur sit amet auctor sem. Suspendisse egestas condimentum sollicitudin. Donec interdum malesuada arcu, vel egestas nibh aliquet nec. In risus sapien, ornare sit amet augue nec, porta aliquam lectus."));
	$wrapper.append($files);
	$wrapper.append($("<div>").addClass("text-right").append($btn));
	return $wrapper;
}
function createInvoicesElement(invoices) {
	var $thead_tr = $("<tr>");
	$thead_tr.append($("<th>").text("Number"));
	$thead_tr.append($("<th>").text("Date"));
	$thead_tr.append($("<th>").text("Entity"));
	$thead_tr.append($("<th>").text("Service"));
	$thead_tr.append($("<th>").text("Total"));
	$thead_tr.append($("<th>").text("Balance"));
	$thead_tr.append($("<th>").text(""));
	var $thead = $("<thead>").append($thead_tr);

	var $tbody = $("<tbody>");
	$.each(invoices, function (i, item) {
		$.each(item.items, function (ii, iitem) {
			var id = "invoice_row_" + i + "_" + ii;
			var $tr = $("<tr>").attr("id", id);

			var pay_element = $("<a>").addClass("btn btn-xs " + (iitem["balance"] ? "btn-primary" : "btn-default disabled")).text("Pay").attr("href", createPayInvoiceItemLink(iitem["id"])).attr("target", "_blank");
			var entity_element = createEntityInfoElement(iitem["entityInfo"]);

			$tr.append($("<td>").text(item["number"]));
			$tr.append($("<td>").text(item["date"] ? new Date(item["date"]).toLocaleDateString() : ""));
			$tr.append($("<td>").append(entity_element));
			$tr.append($("<td>").text(iitem["product"] ? iitem["product"]["name"] : ""));
			$tr.append($("<td>").text(formatMoney(iitem["totalPrice"])));
			$tr.append($("<td>").text(formatMoney(iitem["balance"])));
			$tr.append($("<td>").append(pay_element));

			$tbody.append($tr);
		});
	});

	var i_id = "invoices_" + Math.random().toString().replace(".", "");
	var $invoices = $("<table>").addClass("table table-striped table-hover").attr("id", i_id).append($thead).append($tbody);
	return $invoices;
}
function createTransactionsElement(transactions, invoices) {
	invoices = invoices || [];

	var $thead_tr = $("<tr>");
	$thead_tr.append($("<th>").text("Number"));
	$thead_tr.append($("<th>").text("Date"));
	$thead_tr.append($("<th>").text("Entity"));
	$thead_tr.append($("<th>").text("Invoice"));
	$thead_tr.append($("<th>").text("Service"));
	$thead_tr.append($("<th>").text("Amount"));
	var $thead = $("<thead>").append($thead_tr);

	var $tbody = $("<tbody>");
	$.each(transactions, function (i, item) {
		$.each(item.items, function (ti, titem) {
			var id = "transaction_row_" + i + "_" + ti;
			var $tr = $("<tr>").attr("id", id);
			var iitem = titem["invoiceItem"] || {};

			var t_invoices = iitem["id"] ? $.grep(invoices, function (inv_item, inv_i) { return $.grep(inv_item.items, function (inv_item_item, inv_item_i) { return inv_item_item["id"] == iitem["id"]; }).length; }) : [];
			var t_invoice = t_invoices.length ? t_invoices[0] : null;
			var t_inv_num = t_invoice ? t_invoice["number"] : null;
			var entity_element = createEntityInfoElement(iitem["entityInfo"]);

			$tr.append($("<td>").text(item["number"]));
			$tr.append($("<td>").text(item["timestamp"] ? new Date(item["timestamp"]).toLocaleDateString() : ""));
			$tr.append($("<td>").append(entity_element));
			$tr.append($("<td>").text(t_inv_num ? t_inv_num : iitem["id"]));
			$tr.append($("<td>").text(iitem["product"] ? iitem["product"]["name"] : ""));
			$tr.append($("<td>").text(formatMoney(titem["amount"])));

			$tbody.append($tr);
		});
	});

	var t_id = "transactions_" + Math.random().toString().replace(".", "");
	var $transactions = $("<table>").addClass("table table-striped table-hover").attr("id", t_id).append($thead).append($tbody);
	return $transactions;
}
function createSOPsElement(sops) {
	var $thead_tr = $("<tr>");
	$thead_tr.append($("<th>").text(""));
	$thead_tr.append($("<th>").text("Received"));
	$thead_tr.append($("<th>").text("Entity"));
	$thead_tr.append($("<th>").text("Type"));
	$thead_tr.append($("<th>").text("Via"));
	$thead_tr.append($("<th>").text("Balance"));
	$thead_tr.append($("<th>").text(""));
	var $thead = $("<thead>").append($thead_tr);

	var $tbody = $("<tbody>");
	$.each(sops, function (i, item) {
		var id = "sop_row_" + i;
		var $tr = $("<tr>").attr("id", id);

		var download_element = $("<a>").addClass("btn btn-xs btn-primary").text("Download").attr("href", createFileDownloadLink(item["file"])).attr("target", "_blank");
		var pay_element = $("<a>").addClass("btn btn-xs " + (item["balance"] ? "btn-primary" : "btn-default disabled")).text("Pay").attr("href", createPayInvoiceItemLink(item["invoiceItemId"])).attr("target", "_blank");
		var entity_element = createEntityInfoElement(item["entityInfo"]);

		$tr.append($("<td>").append(download_element));
		$tr.append($("<td>").text(item["accepted"] ? new Date(item["accepted"]).toLocaleDateString() : ""));
		$tr.append($("<td>").append(entity_element));
		$tr.append($("<td>").text(apiType("sopTypes", item["type"])["label"]));
		$tr.append($("<td>").text(apiType("sopAcceptedViaTypes", item["acceptedViaType"])["label"]));
		$tr.append($("<td>").text(formatMoney(item["balance"])));
		$tr.append($("<td>").append(pay_element));
		$tbody.append($tr);
	});

	var s_id = "sops_" + Math.random().toString().replace(".", "");
	var $sops = $("<table>").addClass("table table-striped table-hover").attr("id", s_id).append($thead).append($tbody);
	return $sops;
}
function createContactElement(account, countries) {
	var ci = account["contactInfo"] || {};

	//name
	var prefix_data = [];
	var prefix_d = apiType("salutationTypes", ci["salutationType"]);
	var prefix = prefix_d ? { id: prefix_d["key"], text: prefix_d["label"] } : null;
	$.each(getStaticData()["salutationTypes"], function (i, item) { prefix_data.push({ id: item["key"], text: item["label"] }); });
	var prefix_id = "prefix_" + Math.random().toString().replace(".", "");
	var $prefixes = $("<input>").addClass("form-control").attr("name", "salutationType").attr("type", "hidden").attr("id", prefix_id).data("prefixes", prefix_data).data("init", prefix);
	var $name = $("<div>").addClass("row");
	$name.append($("<div>").addClass("col-md-2").append($("<label>").text("Prefix")).append($prefixes));
	$name.append($("<div>").addClass("col-md-5").append($("<label>").text("First Name")).append($("<input>").addClass("form-control").attr("name", "firstName").attr("type", "text").val(ci["firstName"])));
	$name.append($("<div>").addClass("col-md-5").append($("<label>").text("Last Name")).append($("<input>").addClass("form-control").attr("name", "lastName").attr("type", "text").val(ci["lastName"])));

	//address
	var street_address = ci["streetAddress"] || "";
	var streetAddressLines = (street_address).split("\n");
	var $street = $("<textarea>").attr("name", "streetAddress").css("display", "none").val(street_address);
	var $street1 = $("<input>").addClass("form-control").attr("type", "text").val(streetAddressLines.length >= 0 ? streetAddressLines[0] : "");
	var $street2 = $("<input>").addClass("form-control").attr("type", "text").val(streetAddressLines.length >= 1 ? streetAddressLines[1] : "");
	$street1.on("change", function () { $street.val($street1.val() + "\n" + $street2.val()); });
	$street2.on("change", function () { $street.val($street1.val() + "\n" + $street2.val()); });
	var $address = $("<div>").addClass("row");
	$address.append($street)
	$address.append($("<div>").addClass("col-md-6").append($("<label>").text("Street Address 1")).append($street1));
	$address.append($("<div>").addClass("col-md-6").append($("<label>").text("Street Address 2")).append($street2));

	//csz
	var state_id = "state_" + Math.random().toString().replace(".", "");
	var $state = $("<input>").addClass("form-control").attr("name", "state").attr("type", "hidden").attr("id", state_id).val(ci["state"]).attr("placeholder", "type state name");
	var $csz = $("<div>").addClass("row");
	$csz.append($("<div>").addClass("col-md-6").append($("<label>").text("City")).append($("<input>").addClass("form-control").attr("name", "city").attr("type", "text").val(ci["city"])));
	$csz.append($("<div>").addClass("col-md-4").append($("<label>").text("State")).append($state));
	$csz.append($("<div>").addClass("col-md-2").append($("<label>").text("Zip Code")).append($("<input>").addClass("form-control").attr("name", "postal").attr("type", "text").val(ci["postal"])));

	//country
	var country_data = [];
	var country = null;
	$.each(countries, function (i, item) {
		var states = [];
		$.each(item.states, function (si, sitem) { states.push({ id: sitem["abbreviation"], text: sitem["name"] }); });
		country_data.push({ id: item["code"], text: item["name"], states: states });

		var ci_country = ci["country"] || "";
		if (ci_country.length && item["code"] && item["name"]) {
			if (item["code"].toUpperCase() == ci_country.toUpperCase() || item["name"].toUpperCase() == ci_country.toUpperCase()) country = { id: item["code"], text: item["name"] };
		}
	});
	var country_id = "country_" + Math.random().toString().replace(".", "");
	var $countries = $("<input>").addClass("form-control").attr("name", "country").attr("type", "hidden").attr("id", country_id).data("countries", country_data).data("init", country);
	var $country = $("<div>").addClass("row");
	$country.append($("<div>").addClass("col-md-12").append($("<label>").text("Country")).append($countries));

	//phone email
	var $pe = $("<div>").addClass("row");
	$pe.append($("<div>").addClass("col-md-6").append($("<label>").text("Email")).append($("<input>").addClass("form-control").attr("name", "email").attr("type", "text").val(ci["email"])));
	$pe.append($("<div>").addClass("col-md-6").append($("<label>").text("Phone")).append($("<input>").addClass("form-control").attr("name", "phone").attr("type", "text").val(ci["phone"])));

	//form
	var $form = $("<form>").attr("role", "form").attr("id", "form_contact");
	$form.append($name).append($("<br>")).append($pe).append($("<br>")).append($address).append($("<br>")).append($csz).append($("<br>")).append($country);

	//footer
	var $footer = $("<div>").addClass("row");
	var $save_warning = $("<p>").addClass("help-block").text("Please be aware this contact information will be used for all future correspondence.");
	$btn_contact = $("<button>").addClass("btn btn-primary").attr("name", "btn_update_contact").text("Save Contact");
	$footer.append($("<div>").addClass("col-md-9").append($save_warning));
	$footer.append($("<div>").addClass("col-md-3 text-right").append($btn_contact));

	//script
	var script_lines = [];
	script_lines.push("initContactPrefixesSelect($('#" + prefix_id + "'));");
	script_lines.push("initContactStatesSelect($('#" + state_id + "'));");
	script_lines.push("initContactCountriesSelect($('#" + country_id + "'), $('#" + state_id + "'));");
	var $script = $("<script>").text(script_lines.join(" "));

	var $form_wrapper = $("<div>");
	$form_wrapper.append($form).append($("<br>")).append($footer).append($script);

	return $form_wrapper;
}
function createCredentialsElement(account) {
	var id = account["id"] || "";

	//user
	var $id = $("<div>").addClass("row");
	$id.append($("<div>").addClass("col-md-12").append($("<label>").text("Id")).append($("<input>").addClass("form-control").attr("type", "text").attr("readonly", "readonly").val(id)));

	//new password 1
	var $pw1 = $("<div>").addClass("row");
	$pw1.append($("<div>").addClass("col-md-12").append($("<label>").text("New Password")).append($("<input>").addClass("form-control").attr("type", "password").attr("readonly", "readonly")));

	//new password 2
	var $pw2 = $("<div>").addClass("row");
	$pw2.append($("<div>").addClass("col-md-12").append($("<label>").text("Confirm New Password")).append($("<input>").addClass("form-control").attr("type", "password").attr("readonly", "readonly")));

	//footer
	var $footer = $("<div>").addClass("row");
	$footer.append($("<div>").addClass("col-md-12 text-right").append($("<button>").addClass("btn btn-danger").text("Change Password").prop("disabled", true)));

	var $form = $("<div>");
	$form.append($id).append($("<br>")).append($pw1).append($("<br>")).append($pw2).append($("<br>")).append($footer);

	return $form;
}
function createPaymentElement(account) {
	var anp = account["anetProfile"] || {};
	var pp = anp["paymentProfiles"] || [];

	var $list = $("<ul>").addClass("list-group");
	$.each(pp, function (i, item) {
		var $li = $("<li>").addClass("list-group-item").text(item["name"]);
		$list.append($li);
	});

	var $btn = $("<button>").addClass("btn btn-default").text("Add New");
	$btn.on("click", function () { $("#modal_add_payment").modal("show"); });

	var $wrapper = $("<div>");
	$wrapper.append($list).append($("<div>").addClass("text-right").append($btn));

	return $wrapper;
}
function createSurveyElement(survey) {
	var id = survey["id"] || -1;
	var qs = survey["questions"] || [];

	var likert_answers = ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"];

	var $form = $("<form>");
	$form.append($("<input>").attr("type", "hidden").attr("name", "survey_id").val(id));

	var base_question_id = "question_" + Math.random().toString().replace(".", "");
	$.each(qs, function (i, item) {
		var qid = item["id"];
		var qtxt = item["text"];
		var qt = item["type"];
		var $control = null;

		if (qt == "Likert") {
			$control = $("<select>");
			$control.append($("<option>").val("").text("select an answer..."));
			$.each(likert_answers, function (lai, laitem) { $control.append($("<option>").val(lai).text(laitem)); });
		}
		else if (qt == "FreeResponse") {
			$control = $("<textarea>").attr("rows", "2").attr("maxlength", "255");
		}

		if ($control) {
			var control_id = base_question_id + "_" + i;
			$control.addClass("form-control").attr("data-questionid", qid).attr("id", control_id);
			var $row = $("<div>").addClass("form-group");
			$row.append($("<label>").text(qtxt).attr("for", control_id));
			$row.append($control);
			$form.append($row);
		}
	});

	return $form;
}

//helpers
function createFileDownloadLink(f, credentials) {
	var url = "";

	if (f) {
		credentials = credentials || session["credentials"];

		var arr = [];
		arr.push("accountid=" + credentials["accountId"]);
		arr.push("authkey=" + credentials["authKey"]);
		arr.push("fileid=" + f["id"]);
		arr.push("filename=" + f["filename"]);
		arr.push("accesstoken=" + f["accessToken"]);

		url = _baseapiurl + "file?" + arr.join("&");
	}

	return url;
}
function createPayInvoiceItemLink(id, credentials) {
	var url = "";

	if (id) {
		credentials = credentials || session["credentials"];

		var arr = [];
		arr.push("id=" + credentials["accountId"]);
		arr.push("key=" + credentials["authKey"]);
		arr.push("invoiceItem=" + id);

		url = "https://secure.incnow.com/payra/default.aspx?" + arr.join("&");
	}

	return url;
}
function createEntityInfoLabel(ei) {
	var lbl = "";

	if (ei) {
		var arr = [];

		if (ei["stateType"]) if (ei["stateType"]) arr.push(ei["stateType"]);
		if (ei["incorporationDate"]) if (ei["incorporationDate"].length) arr.push(new Date(ei["incorporationDate"]).toLocaleDateString());
		if (ei["fileNumber"]) if (ei["fileNumber"]) arr.push(ei["fileNumber"]);

		lbl = arr.join(" ");
	}

	return lbl;
}
function createEntityInfoElement(ei) {
	var n = ei ? ei["name"] : null;
	var i = ei ? ei["id"] : null;
	var s = ei ? ei["stateType"] : null;
	var f = ei ? ei["fileNumber"] : null;

	var lbl = s && f ? "(" + s + " " + f + ")" : (s ? "(" + s + ")" : (f ? "(" + f + ")" : ""));
	return $("<span>").text(n + " " + lbl);

	//var lbl = createEntityInfoLabel(ei);
	//var e_id = "entity_info_" + i + "_" + Math.random().toString().replace(".", "");
	//return $("<span>").text(n).attr("title", lbl).attr("data-toggle", "tooltip").attr("id", e_id).append($("<script>").text("$('#" + e_id + "').tooltip();"));
}
function initContactPrefixesSelect($prefixes) {
	$prefixes.select2({
		allowClear: true,
		placeholder: "(none)",
		query: function (query) {
			var results = $prefixes.data("prefixes") || [];
			if (query.term.length) {
				results = $.grep(results, function (ritem, ri) { return ritem["id"].toUpperCase().indexOf(query.term.toUpperCase()) >= 0 || ritem["text"].toUpperCase().indexOf(query.term.toUpperCase()) >= 0; });
			}
			query.callback({ results: results });
		},
		initSelection: function (element, callback) {
			var init = $(element).data("init");
			if (init) callback(init);
		}
	});
}
function initContactStatesSelect($states) {
	$states.select2({
		createSearchChoice: function (term) {
			var results = $states.data("states") || [];
			return !results.length && term.length ? { id: term, text: term } : null;
		},
		query: function (query) {
			var results = $states.data("states") || [];
			if (query.term.length) {
				results = $.grep(results, function (ritem, ri) { return ritem["id"].toUpperCase().indexOf(query.term.toUpperCase()) >= 0 || ritem["text"].toUpperCase().indexOf(query.term.toUpperCase()) >= 0; });
			}
			query.callback({ results: results });
		},
		initSelection: function (element, callback) {
			if ($(element).val().length) callback({ id: $(element).val(), text: $(element).val() });
		}
	});
}
function initContactCountriesSelect($countries, $states) {
	$countries.on("change", function (e) {
		var countries = $countries.data("countries") || [];
		var country = e["added"];
		if (!country) {
			var matches = $.grep(countries, function (item, i) { return item["id"] == $countries.val(); });
			country = matches.length ? matches[0] : {};
		}
		var states = country["states"] || [];
		$states.data("states", states);
		var s_val = $states.val() || "";
		var matches = $.grep(states, function (item, i) { return item["id"].toUpperCase().indexOf(s_val.toUpperCase()) >= 0 });
		var match = matches.length ? matches[0] : states[0];
		$states.select2("data", match);
	}).select2({
		query: function (query) {
			var results = $countries.data("countries") || [];
			if (query.term.length) {
				results = $.grep(results, function (ritem, ri) { return ritem["id"].toUpperCase().indexOf(query.term.toUpperCase()) >= 0 || ritem["text"].toUpperCase().indexOf(query.term.toUpperCase()) >= 0; });
			}
			query.callback({ results: results });
		}//,
		//initSelection: function (element, callback) {
		//	var results = $countries.data("countries") || [];
		//	var init = $(element).data("init");
		//	if (!init && results.length) init = results[0];
		//	if (init) callback(init);
		//}
	});//.trigger("change");

	var results = $countries.data("countries") || [];
	var init = $countries.data("init");
	if (!init && results.length) init = results[0];
	if (init) $countries.select2("data", init).trigger("change");
}
function initAddPaymentExpirationMonthSelect($month) {
	var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
	var current_m = new Date().getMonth() + 1;

	var $select = $("<select>");
	$.each(months, function (i, item) {
		var m = i + 1;
		var lbl = ("0" + m).slice(-2) + " (" + item + ")";
		var selected = m == current_m;
		var $opt = $("<option>").val(m).text(lbl).attr(selected ? "selected" : "x-selected", "selected");
		$select.append($opt);
	});

	$month.html($select.html()).select2();
}
function initAddPaymentExpirationYearSelect($year) {
	var years = 12;
	var current_y = new Date().getFullYear();

	var $select = $("<select>");
	for (var i = -1; i <= years; i++) {
		var y = i + current_y;
		var lbl = y;
		var selected = y == current_y;
		var $opt = $("<option>").val(y).text(lbl).attr(selected ? "selected" : "x-selected", "selected");
		$select.append($opt);
	};

	$year.html($select.html()).select2();
}
function initSigninButton($signin) {
	$signin.on("click", function () {
		var $form = $("#form_signin");
		var c = { accountId: $form.find("[name='accountId']").val(), authKey: $form.find("[name='authKey']").val() };
		var r = $form.find("[name='redirect']").val();

		signIn(c,
			function (a) {
				var name = a["id"];
				var ci = a["contactInfo"];
				var fn, ln, em;
				if (ci["firstName"]) if (ci["firstName"].length) fn = ci["firstName"];
				if (ci["lastName"]) if (ci["lastName"].length) ln = ci["lastName"];
				if (ci["email"]) if (ci["email"].length) em = ci["email"];

				if (fn && ln) name = fn + " " + ln;
				else if (ln) name = ln;
				else if (em) name = em;

				$("#navigation_auth_name").text(name);
				$("#modal_signin").modal("hide");

				$("#navbar a[href='" + r + "']").tab("show");
			},
			function () {
				$("#alert_signin_fail").show();
			});
	});
}

//close modal

$('#btn_signin').click(function () {

    $('#modal_signin').modal('hide');


});

function initSurveySubmitButton($submit) {
	$submit.on("click", function () {
		var data = {};

		var $modal = $("#modal_submit_survey");
		var $form = $("#form_submit_survey");

		var sid = $form.find("[name='survey_id']").val();
		var answers = [];
		$.each($form.find("[data-questionid]"), function (i, item) { 
			var $item = $(item);
			var qid = $item.data("questionid");
			var a = $item.val();
			if (a != "") answers.push({ questionId: qid, answer: a });
		});

		var data = {};
		data.surveyId = sid;
		data.answers = answers;

		var sf = function () {
			$form.find("select").val("");
			$form.find(":text").val("");
			//$modal.modal("hide");
		};

		var ef = function (x) {
			//$modal.modal("hide");
		};

		$modal.modal("hide");
		submitSurvey(data, sf, ef);
	});
}

//init
initSigninButton($("#btn_signin"));
initSurveySubmitButton($("#btn_submit_survey"));
initAddPaymentExpirationMonthSelect($("#add_payment_expiration_month"));
initAddPaymentExpirationYearSelect($("#add_payment_expiration_year"));

if (location.hash != "") {
	var $view_trigger = $("#navbar a[href='" + location.hash + "']");
	if ($view_trigger.length) {
		$view_trigger.trigger("click");
		location.hash = "";
	}
}