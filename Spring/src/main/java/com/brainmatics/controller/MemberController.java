/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.brainmatics.controller;

import com.brainmatics.entity.Member;
import com.brainmatics.service.MemberService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author PC06
 */
@RestController
@RequestMapping("/member")
public class MemberController {
    @Autowired
    private MemberService memberService;
    private int id_member;

    @RequestMapping(method = RequestMethod.POST)
    public Member insert(@RequestBody Member member) {
        return memberService.insertOrUpdate(member);
    }

    @RequestMapping(method = RequestMethod.PUT)
    public Member update(@RequestBody Member member) {
        return memberService.insertOrUpdate(member);
    }

    @RequestMapping(method = RequestMethod.DELETE, value = "/{id_member}")
    public boolean delete(@PathVariable("id_member") int id_member) {
        return memberService.delete(id_member);
    }
    
    @RequestMapping(method = RequestMethod.GET, value = "/{id_member}")
    public Member getById(@PathVariable("id_member") int id_member){
        return memberService.getById(id_member);
    }
    
    @RequestMapping(method = RequestMethod.GET)
    public List<Member> getAll(){
        return memberService.getAll();
    }
}
