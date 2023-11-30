package main

import (
"fmt"
"net/http"
"net/http/httputil"
"net/url"
)

func main() {
// Define the target URL where the requests will be forwarded
targetURL, err := url.Parse("http://charging.siz-tel.com:8880")
if err != nil {
fmt.Println("Error parsing target URL:", err)
return
}

// Create a reverse proxy handler
proxy := httputil.NewSingleHostReverseProxy(targetURL)

// Create a custom handler to modify the response before sending it back to the client
http.HandleFunc("/jsonrpc", func(w http.ResponseWriter, r *http.Request) {
fmt.Println("Received request:", r.URL.Path)

fmt.Println("Received request:", r.URL.Path)

		// Set CORS headers
		w.Header().Set("Access-Control-Allow-Origin", "*")
		w.Header().Set("Access-Control-Allow-Methods", "GET, POST, OPTIONS")
		w.Header().Set("Access-Control-Allow-Headers", "Content-Type")

		// Check if it's a preflight request and handle it
		if r.Method == "OPTIONS" {
			w.WriteHeader(http.StatusOK)
			return
		}

proxy.ServeHTTP(w, r)
})

// Start the server on port 8080
fmt.Println("Proxy server listening on :8880")
http.ListenAndServe(":8880", nil)
}