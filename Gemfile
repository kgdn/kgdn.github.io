source "https://rubygems.org"

# Main source
gem "jekyll", "~> 4.2.0"

# Plugins sources
group :jekyll_plugins do
  gem "jekyll-feed"
  gem "jekyll-toc"
  gem "jekyll-target-blank"
  gem "jekyll-seo-tag"
  gem "jekyll-github-metadata"
  gem "jekyll-sitemap"
end

# Windows and JRuby does not include zoneinfo files, so bundle the tzinfo-data gem
# and associated library.
platforms :mingw, :x64_mingw, :mswin, :jruby do
  gem "tzinfo", "~> 1.2"
  gem "tzinfo-data"
end

# Performance-booster for watching directories on Windows
gem "wdm", "~> 0.1.1", :platforms => [:mingw, :x64_mingw, :mswin]

gem "webrick", "~> 1.7"