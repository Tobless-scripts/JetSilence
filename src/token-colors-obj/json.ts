import type jsType = require('../js.type');

/*
Code Examples:

JSON:
{
  "name": "John Doe",
  "age": 30,
  "isActive": true,
  "address": {
    "street": "123 Main St",
    "city": "New York"
  },
  "hobbies": ["reading", "coding", "gaming"]
}
→ Color affects: "name", "age", "isActive", "address", "street", "city", "hobbies" (JSON property keys)

TypeScript (JSON manipulation):
const user: User = JSON.parse(jsonString);
const jsonData = JSON.stringify(user);
→ Color affects: Property keys when working with JSON objects

Python (JSON):
import json
data = {"name": "John", "age": 30}
json_string = json.dumps(data)
→ Color affects: "name", "age" (dictionary keys that become JSON keys)

PHP (JSON):
$data = array("name" => "John", "age" => 30);
$jsonString = json_encode($data);
→ Color affects: "name", "age" (array keys that become JSON keys)
C (JSON with cJSON library):
cJSON *json = cJSON_CreateObject();
cJSON_AddStringToObject(json, "name", "John");
cJSON_AddNumberToObject(json, "age", 30);
→ Color affects: "name", "age" (JSON key strings)

C++ (JSON with nlohmann/json):
json j;
j["name"] = "John Doe";
j["age"] = 30;
j["isActive"] = true;
→ Color affects: "name", "age", "isActive" (JSON property keys)

C# (JSON with System.Text.Json):
var options = new JsonSerializerOptions { PropertyNamingPolicy = JsonNamingPolicy.CamelCase };
string json = JsonSerializer.Serialize(user, options);
// Or with Newtonsoft.Json:
[JsonProperty("user_name")]
public string Name { get; set; }
→ Color affects: "user_name" (JSON property names in attributes)
Go (JSON):
type User struct {
    Name string `json:"name"`
    Age  int    `json:"age"`
}
→ Color affects: "name", "age" (JSON tag values)

Kotlin (JSON with Gson):
data class User(val name: String, val age: Int)
val gson = Gson()
val json = gson.toJson(user)
→ Color affects: Property keys in generated JSON

Java (JSON with Jackson):
ObjectMapper mapper = new ObjectMapper();
String json = mapper.writeValueAsString(user);
→ Color affects: Property keys in generated JSON
*/

export const json: jsType.TokenColorInterface[] = [
        // JSON KEYS
        {
                scope: [
                        "support.type.property-name.json",
                        "string.json support.type.property-name.json"
                ],
                settings: {
                        foreground: "#9cdcfe",
                        fontStyle: "medium"
                }
        }
];
