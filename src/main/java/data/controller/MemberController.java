package data.controller;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import data.dto.MemberDto;
import data.service.MemberService;
import lombok.AllArgsConstructor;

@RequestMapping("/member")
@CrossOrigin
@RestController
@AllArgsConstructor
public class MemberController {
	MemberService memberService;
	
	@PostMapping("/insert")
	public void insert(@RequestBody MemberDto dto)
	{
		memberService.insertMember(dto);
	}
	@GetMapping("/list")
	public List<MemberDto> list()
	{
		return memberService.getAllMembers();
	}
	@DeleteMapping("/delete")
	public void delete(int num)
	{
		memberService.deleteMember(num);
	}
	
	@GetMapping("/getname")
	public String getName(String myid)
	{
		return memberService.getName(myid);
	}
	
	@GetMapping("/searchid")
	public int SearchId(String myid)
	{
		return memberService.getSearchId(myid);
	}
	@GetMapping("/login")
	public int login(String myid,String mypass)
	{
		return memberService.getLogin(myid, mypass);
	}
	
}
