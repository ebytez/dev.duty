{
  "flow": [
    {
      "data": { },
      "height": 40,
      "id": "start",
      "left": 0,
      "output": { },
      "routes": [
        {
          "condition": "",
          "order": 0,
          "text": "Always",
          "to": "a457bfbbe024680c64faf7e567c3810b",
          "type": "always"
        }
      ],
      "static_routes": true,
      "stuck": true,
      "text": "Start",
      "top": 0,
      "type": "box",
      "width": 100
    },
    {
      "data": {
        "cancel_label": "Cancel",
        "height": "95%",
        "id": "a457bfbbe024680c64faf7e567c3810b",
        "layout": "{\"slots\":{\"service\":{\"type\":\"choice\",\"attributes\":{\"choice_type\":\"typeahead\",\"bucket_name\":\"4zyrl3rb\"},\"labels\":{\"label\":\"Service\",\"labelp\":\"Services\"},\"name\":\"service\",\"bundle\":\"dev.duty\",\"data\":{},\"label\":\"Service\"},\"assign_to\":{\"type\":\"choice\",\"attributes\":{\"choice_type\":\"typeahead\",\"bucket_name\":\"user\"},\"labels\":{\"label\":\"Assign to\",\"labelp\":\"Assign tos\"},\"name\":\"assign_to\",\"bundle\":\"dev.duty\",\"data\":{},\"label\":\"Assign to\"},\"title\":{\"type\":\"string\",\"attributes\":{},\"labels\":{\"label\":\"Title\",\"labelp\":\"Titles\"},\"name\":\"title\",\"bundle\":\"dev.duty\",\"data\":{},\"label\":\"Title\"},\"urgency\":{\"type\":\"choice\",\"attributes\":{\"choices\":[{\"label\":\"High\",\"value\":\"1\",\"disabled\":false},{\"label\":\"Low\",\"value\":\"3\",\"disabled\":false}]},\"labels\":{\"label\":\"Urgency\",\"labelp\":\"Urgencies\"},\"name\":\"urgency\",\"bundle\":\"dev.duty\",\"data\":{},\"label\":\"Urgency\"},\"description\":{\"type\":\"big_string\",\"attributes\":{},\"labels\":{\"label\":\"Description\",\"labelp\":\"Descriptions\"},\"name\":\"description\",\"bundle\":\"dev.duty\",\"data\":{},\"label\":\"Description\"}},\"slotsChanged\":true,\"layout\":{\"version\":1,\"layout\":[{\"type\":\"section\",\"colData\":[{\"column\":0}],\"cols\":[[{\"type\":\"slot\",\"name\":\"service\"},{\"type\":\"slot\",\"name\":\"assign_to\"},{\"type\":\"slot\",\"name\":\"title\"},{\"type\":\"slot\",\"name\":\"urgency\"},{\"type\":\"slot\",\"name\":\"description\"}]],\"guid\":\"grcl8lem\",\"columns\":1}],\"pageData\":{}},\"display_rules\":[{\"slot\":\"title\",\"conditions\":{\"mandatory\":\"[]\"}},{\"slot\":\"service\",\"conditions\":{\"mandatory\":\"[]\"}}]}",
        "name": "Create New Incident",
        "ok_label": "OK",
        "width": "600px"
      },
      "height": 40,
      "id": "a457bfbbe024680c64faf7e567c3810b",
      "left": 140,
      "output": {
        "value": "form"
      },
      "routes": [
        {
          "condition": "success:eq:1:true",
          "order": 0,
          "text": "Ok",
          "to": "eeb82ee1f96810cfb4cbcd81313e4ef2"
        },
        {
          "condition": "success:eq:0:false",
          "order": 1,
          "text": "Cancel"
        }
      ],
      "text": "Create New Incident",
      "top": 80,
      "type": "form_dialog",
      "width": 100
    },
    {
      "data": {
        "id": "eeb82ee1f96810cfb4cbcd81313e4ef2",
        "name": "Run Script",
        "script": "var fr = new FRecord('pd_incident');\n\nfr.title = outputs['a457bfbbe024680c64faf7e567c3810b']['form']['title'];\nfr.description = outputs['a457bfbbe024680c64faf7e567c3810b']['form']['description'];\nfr.urgency = outputs['a457bfbbe024680c64faf7e567c3810b']['form']['urgency'];\nfr.service = outputs['a457bfbbe024680c64faf7e567c3810b']['form']['service'];\nfr.assignment_user = outputs['a457bfbbe024680c64faf7e567c3810b']['form']['assign_to'];\n\nvar id = fr.insert();"
      },
      "height": 40,
      "id": "eeb82ee1f96810cfb4cbcd81313e4ef2",
      "left": 280,
      "output": { },
      "routes": [
        {
          "condition": "success:eq:1:true",
          "order": 0,
          "text": "Success",
          "to": "8b31ea7155cca355b81b0ff285d315ab",
          "type": "success"
        },
        {
          "condition": "success:eq:0:false",
          "order": 1,
          "text": "Failure",
          "type": "error"
        }
      ],
      "text": "Run Script",
      "top": 180,
      "type": "script",
      "width": 100
    },
    {
      "data": {
        "browser_history": "append",
        "id": "8b31ea7155cca355b81b0ff285d315ab",
        "name": "Navigate",
        "type": "refresh"
      },
      "height": 40,
      "id": "8b31ea7155cca355b81b0ff285d315ab",
      "left": 390,
      "output": { },
      "routes": [ ],
      "text": "Navigate",
      "top": 280,
      "type": "navigate",
      "width": 100
    }
  ],
  "inputs": [ ],
  "outputs": [ ],
  "properties": {
    "async": false,
    "flow_type": "96be53bad37c4862adcc6bc75223eb41"
  }
}