package com.brainmatics;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class DemoJpaApplication {

	public static void main(String[] args) {
		SpringApplication.run(DemoJpaApplication.class, args);
	}
        
  @Bean
        public FilterRegistrationBean corsFilterRegistration(){
            FilterRegistrationBean registrationBean = new FilterRegistrationBean(new CORSFilter());
            registrationBean.setName("CORS Filter");
            registrationBean.addUrlPatterns("/*");
            registrationBean.setOrder(1);
            return registrationBean;
        }
}
