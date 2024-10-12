# HTTP vs HTTPS

### HTTP (Hypertext Transfer Protocol)
- **Purpose**: HTTP is the basic protocol used for transferring data over the web. 
- **Data Transmission**: In HTTP, data is transferred as plain text. For example, if you send `abcd`, it will be transmitted as `abcd` without encryption.
- **Security**: There is no encryption, which means anyone intercepting the data can read it directly.

### HTTPS (Hypertext Transfer Protocol Secure)
- **Purpose**: HTTPS is HTTP with an added layer of security through encryption.
- **Data Transmission**: Data sent via HTTPS is encrypted, so if you send `abcd`, it might look like random characters while in transit (e.g., `2baf2...`). Once it reaches the recipient, it is decrypted back to its original form (`abcd`), making it readable.
- **Security**: HTTPS ensures that data cannot be easily intercepted and read by attackers, protecting sensitive information such as passwords, payment details, etc.
  
### Key Difference:
- **HTTP**: No encryption, data is sent as clear text.
- **HTTPS**: Encrypted data transmission, ensuring secure communication.

---

# URL, URI, and URN

### URL (Uniform Resource Locator)
- **Definition**: A URL specifies the location of a resource on the web. It includes the protocol (e.g., HTTP/HTTPS) and the path to the resource.
- **Example**: `https://example.com/resource`.

### URI (Uniform Resource Identifier)
- **Definition**: A URI is a broader term that refers to both URLs and URNs. It identifies a resource either by location (URL) or by name (URN).
- **Example**: `https://example.com/resource` (URL) or `urn:isbn:0451450523` (URN) are both URIs.

### URN (Uniform Resource Name)
- **Definition**: A URN is a type of URI that identifies a resource by name, rather than location.
- **Example**: `urn:isbn:0451450523` refers to a book using its ISBN but doesn't specify where to find it.

**Summary**:
- **URL**: A type of URI that locates a resource.
- **URN**: A type of URI that names a resource.
- **URI**: A generic term that can be either a URL or a URN.

---

# HTTP Headers

HTTP headers are key-value pairs sent along with both HTTP requests (from clients) and responses (from servers). They provide metadata about the request or response.

### Uses of HTTP Headers:
1. **Caching**: Headers control how responses are cached to improve performance (e.g., `Cache-Control`, `Expires`).
2. **Authentication**: Headers can send authentication tokens or credentials (e.g., `Authorization`).
3. **State Management**: Headers help manage user state, such as whether the user is logged in (e.g., cookies sent in `Set-Cookie` header).

### Types of Headers:
1. **Request Headers**: Sent by the client to the server, providing information such as user agent, accepted formats, etc.
   - Example: `User-Agent: Mozilla/5.0`, `Accept: application/json`
2. **Response Headers**: Sent by the server, giving details about the response.
   - Example: `Content-Type: application/json`, `Set-Cookie: sessionId=abc123`
3. **Representation Headers**: Deal with encoding or compression of data (e.g., `Content-Encoding`, `Content-Type`).
4. **Payload Headers**: Contain information about the actual body of the message (e.g., `Content-Length`, `Content-Disposition`).

---

# HTTP Methods

HTTP methods define the type of action that a client wants to perform on a server resource. The most common ones are:

1. **GET**: Requests data from a server (typically retrieves a resource).
2. **HEAD**: Similar to GET, but only fetches the headers (no body in response).
3. **OPTIONS**: Checks which HTTP methods are supported for a particular resource.
4. **TRACE**: Performs a loopback test, returning the same data sent in the request.
5. **DELETE**: Deletes a specified resource from the server.
6. **PUT**: Replaces a resource on the server with new data (completely replaces the resource).
7. **POST**: Submits data to the server to create a new resource.
8. **PATCH**: Updates part of an existing resource (modifies the resource partially).

---

# HTTP Status Codes

HTTP status codes indicate the result of an HTTP request. They are grouped into five categories:

1. **1xx (Informational)**: The request is still being processed.
   - `100 Continue`: The request has been received, and the client can continue with the process.
   - `102 Processing`: The server is processing the request, but no response is available yet.

2. **2xx (Success)**: The request was successfully processed.
   - `200 OK`: The request was successful.
   - `201 Created`: A new resource was successfully created.
   - `202 Accepted`: The request has been accepted for processing, but the processing is not yet complete.

3. **3xx (Redirection)**: Further action is needed to complete the request.
   - `307 Temporary Redirect`: The resource has been temporarily moved to another location.
   - `308 Permanent Redirect`: The resource has been permanently moved to another location.

4. **4xx (Client Errors)**: There was an error with the client’s request.
   - `400 Bad Request`: The server could not understand the request due to invalid syntax.
   - `401 Unauthorized`: The request requires user authentication.
   - `402 Payment Required`: Reserved for future use, sometimes used for payment-related requests.
   - `404 Not Found`: The server cannot find the requested resource.

5. **5xx (Server Errors)**: The server encountered an issue and couldn’t process the request.
   - `500 Internal Server Error`: A generic error message indicating something went wrong on the server.
   - `504 Gateway Timeout`: The server, while acting as a gateway, did not receive a timely response from the upstream server.

