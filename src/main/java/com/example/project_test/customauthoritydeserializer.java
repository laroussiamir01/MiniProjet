package com.example.project_test;

import com.fasterxml.jackson.core.JsonParser;
import com.fasterxml.jackson.databind.DeserializationContext;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import io.jsonwebtoken.io.IOException;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;

import java.util.Iterator;
import java.util.LinkedList;
import java.util.List;

public class customauthoritydeserializer {
//    @Override
//    public Object deserialize(JsonParser jp, DeserializationContext ctxt) throws IOException, java.io.IOException {
//        ObjectMapper mapper = (ObjectMapper) jp.getCodec() ;
//        JsonNode jsonnode = mapper.readTree(jp);
//        List<GrantedAuthority> grantedauthorities = new LinkedList<>() ;
//
//        Iterator<JsonNode> elements = jsonnode.elements();
//        while (elements.hasNext()) {
//            JsonNode next = elements.next();
//            JsonNode authority = next.get("authority");
//            grantedauthorities.add(new SimpleGrantedAuthority(authority.asText()));
//        }
//        return grantedauthorities;
//    }

}
