package xyz.study.module2;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class HelloController {
    @RequestMapping("/sayHello")
    @ResponseBody
    String sayHello() {
        return "Hello, spring boot";
    }

    @RequestMapping("/sayBye")
    @ResponseBody
    String sayBye() {
        return "Bye, spring boot";
    }
}
