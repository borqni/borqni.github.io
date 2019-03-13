package com.softuni.controller;

import com.softuni.entity.calculator;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class HomeController {

    @GetMapping("/")
    public String index(Model model) {
        model.addAttribute("operator", "+");
        model.addAttribute("view", "views/calculatorForm");
        return "base-layout";
    }

    @PostMapping("/")
    public String calculate(@RequestParam String leftOperand,
                            @RequestParam String operator,
                            @RequestParam String rightOperand,
                            Model model) {

        double num1;
        double num2;

        try {
            num1 = Double.parseDouble(leftOperand);
        } catch (NumberFormatException ex) {
            num1 = 0;
        }

        try {
            num2 = Double.parseDouble(rightOperand);
        } catch (NumberFormatException ex) {
            num2 = 0;
        }


        calculator calculator = new calculator(num1, operator, num2);

        double result = calculator.calculateResult();

        model.addAttribute("leftOperand", calculator.getLeftOperand());
        model.addAttribute("operator", calculator.getOperator());
        model.addAttribute("rightOperand", calculator.getRightOperand());

        model.addAttribute("result", result);

        model.addAttribute("view", "views/calculatorForm");

        return "base-layout";
    }
}
