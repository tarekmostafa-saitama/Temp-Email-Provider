using System;
using AutoMapper;
using CleanArchitecture.Application.Common.AutoMapper.Profiles;

namespace CleanArchitecture.Application.Common.AutoMapper
{
    public static class AutoMapperManager
    {
        public static IMapper Mapper => LazyMapper.Value;

        private static readonly Lazy<IMapper> LazyMapper = new Lazy<IMapper>(() =>
        {
            var config = new MapperConfiguration(cfg =>
            {
                cfg.AddProfile<MainMappingProfile>();
            });

            var mapper = config.CreateMapper();

            return mapper;
        });
    }
}
