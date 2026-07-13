# BandPet 签名证书

## 生成正式证书

请运行以下命令生成证书（替换引号内的信息为你的真实信息）：

```bash
openssl req -x509 -newkey rsa:2048 -keyout private.pem -out certificate.pem \
  -days 3650 -nodes \
  -subj "/C=CN/ST=省份/L=城市/O=组织名/OU=组织单元/CN=你的名字/emailAddress=你的邮箱"
```

## 参数说明

| 参数 | 说明 | 示例 |
|------|------|------|
| C | 国家代码 | CN |
| ST | 省份 | Beijing |
| L | 城市 | Beijing |
| O | 组织名称 | 你的公司名 |
| OU | 组织单元 | Development |
| CN | 你的名字 | Your Name |
| emailAddress | 邮箱 | your@email.com |

## 放置位置

生成后将 `private.pem` 和 `certificate.pem` 放在本目录下即可。
