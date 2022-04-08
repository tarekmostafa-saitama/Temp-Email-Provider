﻿using System.Security.Claims;
using CleanArchitecture.Application.Common.Interfaces;
using CleanArchitecture.Domain.Entities;
using CleanArchitecture.Infrastructure.Identity.Models;
using Microsoft.AspNetCore.Identity;

namespace CleanArchitecture.Infrastructure.Services;

public class AccessTokenService : IAccessTokenService
{
    private readonly UserManager<ApplicationUser> _userManager;
    private readonly ITokenGenerator _tokenGenerator;
    private readonly JwtSettings _jwtSettings;

    public AccessTokenService(ITokenGenerator tokenGenerator, JwtSettings jwtSettings, UserManager<ApplicationUser> userManager)
    {
        _userManager = userManager;
        (_tokenGenerator, _jwtSettings) = (tokenGenerator, jwtSettings);
    }

    public string Generate(ApplicationUser user)
    {
        List<Claim> claims = new()
        {
            new Claim("Id", user.Id),
            new Claim("FullName", user.FullName ?? "Demo"),
            new Claim("Email", user.Email),
            new Claim("Role", _userManager.GetRolesAsync(user).Result.First()),
        };
        return _tokenGenerator.Generate(_jwtSettings.AccessTokenSecret, _jwtSettings.Issuer, _jwtSettings.Audience,
            _jwtSettings.AccessTokenExpirationMinutes, claims);
    }
}