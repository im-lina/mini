package com.example.mini_app;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;
import java.net.URLEncoder;

import org.json.JSONObject;
import org.json.XML;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ApiExplorerController {

  static String getPriceItemListURL = "http://apis.data.go.kr/1240000/bpp_openapi/getPriceItemList";
  static String getStandardInfoSvc = "http://openapi.price.go.kr/openApiImpl/ProductPriceInfoService/getStandardInfoSvc.do";

  @GetMapping("api/getStandardInfoSvc")
  public static String getStandardInfoSvc(String[] args) throws IOException {

    StringBuilder urlBuilder = new StringBuilder(
        "http://openapi.price.go.kr/openApiImpl/ProductPriceInfoService/getStandardInfoSvc.do");
    urlBuilder.append("?" + URLEncoder.encode("serviceKey", "UTF-8")
        + "=%2FH2thCcdVZY4VjL9Ie8m%2BWmS6znuhUZRvEOUAJZbMCirPg8kjXPGYD%2BR%2Fj0KB0%2FFg5OV7n0sfws8zMr80sC1sw%3D%3D");
    urlBuilder.append("&" + URLEncoder.encode("classCode", "UTF-8") + "=" + URLEncoder.encode("“AR”", "UTF-8"));

    // System.out.println("----urlBuilder: " + urlBuilder); */

    // urlBuilder.append("&" + URLEncoder.encode("numOfRows", "UTF-8") + "=" +
    // URLEncoder.encode("50", "UTF-8"));
    // urlBuilder.append("&" + URLEncoder.encode("pageNo", "UTF-8") + "=" +
    // URLEncoder.encode("1", "UTF-8"));
    URL url = new URL(urlBuilder.toString());
    HttpURLConnection conn = (HttpURLConnection) url.openConnection();
    conn.setRequestMethod("GET");
    conn.setRequestProperty("Content-type", "application/json");
    // System.out.println("Response code: " + conn.getResponseCode());
    BufferedReader rd;
    if (conn.getResponseCode() >= 200 && conn.getResponseCode() <= 300) {
      rd = new BufferedReader(new InputStreamReader(conn.getInputStream()));
    } else {
      rd = new BufferedReader(new InputStreamReader(conn.getErrorStream()));
    }
    StringBuilder sb = new StringBuilder();
    String line;
    while ((line = rd.readLine()) != null) {
      sb.append(line);
    }
    rd.close();
    conn.disconnect();
    // System.out.println(sb.toString());

    JSONObject xmlJSONObj = XML.toJSONObject(sb.toString());
    String jsonStr = xmlJSONObj.toString(4);
    System.out.println(jsonStr);
    return jsonStr;

  }

  @GetMapping("/api/getPriceItemList")
  public static String getPriceItemList(String[] args) throws IOException {

    StringBuilder urlBuilder = new StringBuilder("http://apis.data.go.kr/1240000/bpp_openapi/getPriceItemList");
    urlBuilder.append("?" + URLEncoder.encode("ServiceKey", "UTF-8")
        + "=%2FH2thCcdVZY4VjL9Ie8m%2BWmS6znuhUZRvEOUAJZbMCirPg8kjXPGYD%2BR%2Fj0KB0%2FFg5OV7n0sfws8zMr80sC1sw%3D%3D");
    urlBuilder.append("&" + URLEncoder.encode("numOfRows", "UTF-8") + "=" + URLEncoder.encode("50", "UTF-8"));
    urlBuilder.append("&" + URLEncoder.encode("pageNo", "UTF-8") + "=" + URLEncoder.encode("1", "UTF-8"));
    URL url = new URL(urlBuilder.toString());
    HttpURLConnection conn = (HttpURLConnection) url.openConnection();
    conn.setRequestMethod("GET");
    conn.setRequestProperty("Content-type", "application/json");
    System.out.println("Response code: " + conn.getResponseCode());
    BufferedReader rd;
    if (conn.getResponseCode() >= 200 && conn.getResponseCode() <= 300) {
      rd = new BufferedReader(new InputStreamReader(conn.getInputStream()));
    } else {
      rd = new BufferedReader(new InputStreamReader(conn.getErrorStream()));
    }
    StringBuilder sb = new StringBuilder();
    String line;
    while ((line = rd.readLine()) != null) {
      sb.append(line);
    }
    rd.close();
    conn.disconnect();
    // System.out.println(sb.toString());

    JSONObject xmlJSONObj = XML.toJSONObject(sb.toString());
    String jsonStr = xmlJSONObj.toString(4);

    return jsonStr;
    // System.out.println(jsonStr);
  }

}
