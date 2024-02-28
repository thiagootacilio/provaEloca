FROM php:7.4-fpm

ENV TZ="America/Sao_Paulo"

WORKDIR /var/www/html

#ADD sources.list /etc/apt/sources.list

RUN apt-get update --fix-missing \
    && apt-get install -y apt-utils \
    && apt-get install -y libfreetype6-dev \
    && apt-get install -y libjpeg62-turbo-dev \
    && apt-get install -y libcurl4-gnutls-dev \
    && apt-get install -y libxml2-dev \
    && apt-get install -y freetds-dev \
    && apt-get install -y git \
    && apt-get install -y curl \
    && apt-get install -y supervisor \
    && apt-get install -y libpq-dev \
    && docker-php-ext-configure gd \
    && docker-php-ext-install gd \
    && docker-php-ext-install soap \
    && docker-php-ext-install calendar \
    && docker-php-ext-install intl 

RUN docker-php-ext-install pdo pdo_mysql
# for mysqli if you want
RUN docker-php-ext-install mysqli && docker-php-ext-enable mysqli

RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer && chmod +x /usr/local/bin/composer

RUN curl -k -O -L https://github.com/wkhtmltopdf/packaging/releases/download/0.12.6-1/wkhtmltox_0.12.6-1.buster_amd64.deb && apt install -y ./wkhtmltox_0.12.6-1.buster_amd64.deb && rm wkhtmltox_0.12.6-1.buster_amd64.deb

COPY ./docker/php-fpm/docker-entrypoint.sh /usr/local/bin/
COPY ./docker/php-fpm/php-ini-overrides.ini /usr/local/etc/php/conf.d/99-overrides.ini
COPY ./docker/php-fpm/www.conf.default /usr/local/etc/php-fpm.d/www.conf 

RUN chmod 777 /usr/local/bin/docker-entrypoint.sh \
    && ln -s /usr/local/bin/docker-entrypoint.sh /

# APM Divedot (monitoramento simon)
RUN curl https://cdn.simonops.com/php/dd-php-agent.deb -o /tmp/dd-php-agent.deb \
    && dpkg -i /tmp/dd-php-agent.deb && rm -f /tmp/dd-php-agent.deb \
    && cp -rp /opt/datadog-php/etc/ddtrace.ini $PHP_INI_DIR/conf.d/

COPY . /var/www/html/
 
RUN chown -R www-data:www-data /var/www/html
RUN chmod -R 777 /var/www/html/storage
RUN ls -la /var/www/html/storage/*
RUN chmod -R 777 /var/www/html/bootstrap/cache

RUN ["apt-get", "install", "-y", "zip"]
RUN ["apt-get", "install", "-y", "unzip"]