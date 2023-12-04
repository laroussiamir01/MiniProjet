package config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.scheduling.annotation.EnableAsync;
import org.springframework.scheduling.concurrent.ThreadPoolTaskExecutor;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;

import java.util.concurrent.Executor;

@Configuration
public class CorsConfig {
    @Bean
    public CorsFilter corsFilter() {
        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        CorsConfiguration config = new CorsConfiguration();
        config.setAllowCredentials(true);
        config.addAllowedOrigin("http://localhost:4200");
        config.addAllowedHeader("*");
        config.addAllowedMethod("*");
        source.registerCorsConfiguration("/**", config);
        return new CorsFilter(source);
    }

//    @Bean(name ="asyncTaskExecutor")
//    public Executor AsyncTaskExecutor(){
//        ThreadPoolTaskExecutor taskExecutor= new ThreadPoolTaskExecutor();
//        taskExecutor.setCorePoolSize(2);
//        taskExecutor.setQueueCapacity(100);
//        taskExecutor.setMaxPoolSize(2);
//        taskExecutor.setThreadNamePrefix("AsyncTaskThread-");
//        taskExecutor.initialize();
//        return taskExecutor;
//
//    }
}