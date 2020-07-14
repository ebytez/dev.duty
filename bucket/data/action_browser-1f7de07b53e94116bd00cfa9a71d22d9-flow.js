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
          "to": "7ea62b9324a19eda5540340e1255610d",
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
        "hide_loading": "0",
        "id": "7ea62b9324a19eda5540340e1255610d",
        "isList": false,
        "isWizard": "0",
        "name": "Run Script",
        "script": "var HTTPScriptable = require(\"core/HTTPScriptable\");\nvar client = new HTTPScriptable(\"https://catfact.ninja/fact\"); \nvar userResponse = client.get();\nvar userObject = JSON.parse(userResponse.getResponseBody());\n\n\naction.output.cat_faq = userObject.fact;",
        "show_logging": "0",
        "suppress_messages": "0",
        "use_ids": "0"
      },
      "height": 40,
      "id": "7ea62b9324a19eda5540340e1255610d",
      "left": 50,
      "output": {
        "script_outputs": "[{\"id\":\"7ea62b9324a19eda5540340e1255610d.cat_faq\",\"type\":\"string\",\"attributes\":\"{}\",\"labels\":\"{\\\"label\\\":\\\"Cat FAQ\\\",\\\"labelp\\\":\\\"Cat FAQs\\\"}\",\"name\":\"cat_faq\",\"bucket\":\"7ea62b9324a19eda5540340e1255610d\"}]"
      },
      "routes": [
        {
          "condition": "success:eq:1:true",
          "order": 0,
          "text": "Success",
          "to": "9c6d99e2818af706fe73388e990b837b",
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
      "top": 90,
      "type": "script",
      "width": 100
    },
    {
      "data": {
        "cancel": "Cancel",
        "id": "9c6d99e2818af706fe73388e990b837b",
        "isList": false,
        "message": "CAT FAQ:\n\n    %{outputs['7ea62b9324a19eda5540340e1255610d']['cat_faq']}",
        "name": "Confirmation",
        "ok": "OK",
        "show_cancel": false,
        "type": "info"
      },
      "height": 40,
      "id": "9c6d99e2818af706fe73388e990b837b",
      "left": 100,
      "output": { },
      "routes": [
        {
          "condition": "success:eq:1:true",
          "order": 0,
          "text": "Ok",
          "type": "ok"
        },
        {
          "condition": "success:eq:0:false",
          "order": 1,
          "text": "Cancel",
          "type": "cancel"
        }
      ],
      "text": "Confirmation",
      "top": 190,
      "type": "confirm",
      "width": 100
    }
  ],
  "inputs": [
    {
      "attributes": {
        "buckets": "true",
        "choice_type": "typeahead"
      },
      "labels": {
        "label": "Bucket",
        "labelp": "Buckets"
      },
      "name": "bucketId",
      "type": "choice"
    },
    {
      "attributes": {
        "bucket_slot": "bucketId",
        "choice_type": "typeahead"
      },
      "labels": {
        "label": "Record",
        "labelp": "Records"
      },
      "name": "record",
      "type": "choice"
    }
  ],
  "outputs": [ ],
  "properties": {
    "async": false,
    "flow_type": "f2b9095bbd2441709f25a07cdf240534"
  }
}