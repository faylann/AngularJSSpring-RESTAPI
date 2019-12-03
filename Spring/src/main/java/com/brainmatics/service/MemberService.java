/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.brainmatics.service;

import com.brainmatics.entity.Member;
import com.brainmatics.repo.MemberRepo;
import java.util.List;
import javax.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author PC06
 */
@Service("memberService")
@Transactional
public class MemberService {
    @Autowired
    private MemberRepo repo;

    public Member insertOrUpdate(Member member) {
        return repo.save(member);
    }
    
    public boolean delete(int id_member){
        repo.delete(id_member);
        return true;
    }
    
    public Member getById(int id_member){
        return repo.findOne(id_member);
    }
    
    public List<Member> getAll(){
        return repo.findAllMember();
    }
}
