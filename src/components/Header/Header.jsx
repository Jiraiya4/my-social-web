import s from './Header.module.css'

const Header = () => {
    return (
        <header className={s.header}>
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAABJlBMVEXdPTH///8gku3/wQcop0XlNhnbJxVHhdLlNDD64+EjqEX/wgDbMDNFhtIdpkZMl0L/+ev6rQ8Ai+zcMCHcOCsAj/X6wQfdOSw8qUHcNCYAoTLbKxr/vQDbIw7bKBYbpD387u3mfHbsoZ3gUUfb6/vq9P0AiOwAjvcAjeziYlrkcGnuq6f1zsxKsmALojWw0/f//uYwpC/Is2cvlOJku3Xa7t7wtLDzwr/98/PoiILiYFfqko3to5/fST7/7MH/1HEul+6SzZ3r9u2PwfTJ5s/I4Ppgq/Gl1a51tPLyvh+XqJ2qrIw4lt1+orNfnMhZmD/eqDmBkqGjzPa23b2JpKvXt1XouzT/y0h5woeUzZ5mnsHcuEy5sHpLmNShqpQ7rVTPtWG4r3ybY4AiAAAPO0lEQVR4nO3de3/SSBcA4BAoCrFrJQSEGCilWqCIrrX0JkpbrVrvt+qqte73/xKbcAlzOZNkLgT7vjn7Z/fX5vEkM5OZkxktFWc8flJKl548jvVvajH+rZWvt9KG+9+trzH+0TiFK0Z6GsZKfH82PuFKGo34iLEJcWCMxLiEJDA+YkxCGhgbMR4hBIyLqEb46eFF/uLbNuvHMDCAuP5iqA9P7im5NhXC7Uyvnsnk69W7n8CfI90EHoxO497WnZbuRmG4ruDqFAi3q/nMOPK9/OER9XMmECTePtYL+jQKCogKhJkp0It69eFT/MesWxS8UZ+djNM3jaH85ckLn/cyWNSrF8+RRAYDMeLtj8MC5tP11kfp65MXZqjI96p+qxMGnBHXX5A8NUmUFj6t0kQvkeNWJxw4Id6j0jd5Ep8tXPiwDgm9RNYPj6IA08b99eMWyPPiZNHCIzCFk0T+XQrnGcaDczh9kyTeXrDwH0YK3fjrZondT0x9L0+HVoDPbWuOFyzsBQFD0/f7+4YVxBsRFyv8xBSGAQ2j9Op1cPomQsnBm6Twbl4I6Kbvx5tCFJ8u3dbICbdZ7Uwg0PX9PI/I06WHbnLCb4x2JghoGGenenSfe5u+WKCQkUI20Osc3lqFcBZGXJyQHJKGAd3O4dcWT/omQqnBqZTwAmxnWEDD+PLGCu0coJAanMoI4SEpDHRvz1fnG9zpG4fU4FRGCA5JQaDbunxu8d+e02jJdBgSQnBICgC9zoG7dSGSKDE4lRD+08vT4Y5FyTg7HYrenn4SJQan0YSrOSCuA/HuBhnvP1xREMvQBayqEuYatpOlo3YVimtUmEsqAriArGM3ciqEj5yK9qdGxXkkL1xzFs0IDGdNVpj7s4EuMexGDRM2/txbdByVhqTQXrQgNGw54eqffpO6t2lIpxEizGUXDQiNbMiDmAgT4eIjESbCRLj4SISJMBEuPhJhIkyEi49EmAgT4eKjJiO8fby8tGhAaFy9DtS0RhM+Oym0rlwGYY+qaY0k/Dj0VvwuRQ7zo5pWPqFf63lJhHhNa7jw3pZfLHhphJlZTWuY8PYxWgt5mYSjRNKtDiH0Whd0eflyCTNQJT0m/KiT9QTKheVxKPyNuNAzZp4zhM90up5AmbBcMe2aWR4099vt9v5AK5o126wUFfxmUuhGr74NCdfvAEUQaoQV2xk0Nruru8g/7W6u2z9o21lTVgkIM/nqNiAEyzwUCCu1cmMHtWGR63dMW2oVFhJm8hla+BEseZEVls3sXpelm2az23BM8ScTFGZ6fsfhC0/mkUN7sBnCmyD7zZqoERbWH1JCECgnNIv9SL5RdEWNsDBzMX9hORtaCILHzsBUKPQfRF84VCw0mxHqlYhYcwTSCAvzdynhC7UtjXPA7XMj1+RPI+M5PKSEYHcoLHQ4nkAijWqEsw5x1h9uKRRmdwSB7tPIO28C94f+TYoI70G3qZgwG9YFBsVmTYFw1h2i41JlOXTEM+hFh28cd/UdlMPZr0OEx0ASRYS2UCMzixxfEq/duPkXu53BhLeBtkZAWNyXA7rXxCksUcQq8h6Mvh8CAzcBoR2tODkg9rl6xWs3DJI4G7IRwmd0PT2/0GSPZHL9g8Z+c+BGs73nvkyx/j++B9EVpgliFX3Nx97x6XENv7DC4h1ojvvKO3nHL7ovxM5gDR72tLmFBPEC/W34LAbV1nALTfhlItfO0i+B7qtVB+pXBrx3aRon9lizGG5bQ92m3EI4hZtZRlqK2SZl5G5LR18bI8QqNt+Gz7VRg1NeYWUPAh4EjFPKNdJ4wPfKPxHOiPVv2K/Dheuyc202dNdtBg/Eyk4HbXR4y5KnQp9Yxee+iflSsq3hFWYBYPglF9FXySbnG5QvnBCRISkkJAennMIy1NtHuetMbfIystvknZaaCcfEHjG1T87qywkr0IAtUk7Ktr3X7+7ssZqkSMIRsU78eVJIDE45hSbwWhj5mxS3ixSZV0SFLhEdkoJCoq3hFNrAW0V3zp9sYMJ06W9yaYYU3j+XWZmBmtJ4hUaJ3JiJEK4YPy3FwnkXO+DCNLUxEy5ccf8RhoqFKaE5wuhBCQkiJvQ2zDFOC4qFc/447Np7ao8YjIgKRzsCGS83JNpSaP5izt9OmR/oXXBQIiKcbHlkfBdf5TbBTzp3RCZ6I8fSlbNA4kw43TjO+G0JC+GBd6qrzfFZXLpySguRre40Euj+9HVLVFhugkJ38G1Kr4SyhUNgs6YZcSpEduUyXlmiQs1hLoX22858kEvLGw+g/ahWcCG67ZhREheCTc0kVvttd1im/JFcWm69BXfcWkGF+L5qxpuWqLDYYQvd2N3Z82ZrlCqXlnULaGt8okYD08YPS1QYYS4xt7PXVJlLV1j4DG+btjIVUjvjGefCVV+M1pTMZXdt31GkdIV6i7Ex3MpYSG/9Z/xriQrDv4/3o3swyEpUKKBC6182UYM2UDUM4buUb1I/tzaQKcPwha1zhtDtNLTUV+gHnwuiQs3mW753kTWpXsQT6htfGMSvKe3xLUh4ZgkL+RfXug2ZzUVGwtYbhvDWY+0JnN23EhW0/OuHqwfAlDiPULdeMohPNMa+XA8scaHmRKsTwowCc1CY8BcsNEoaLE8bWxJCLRupz8Aj1+Zc3saE+hZrJ1FGDtPGL0tCqJkDgaX8vi3SrE6EFjg49XIIP4fui7CUUCs7Df6V0txA4GmcCBmDU/c5BNvS9PRFWKLqq+JE2cWJiH1+4kTIGJy6bSnYH3rCLxtyQtcILw8qJk6FBeBFeNQfMjeFHw1OJasvi7XKAWcieRdmfKGuG8DobDwuZbSz3ouwfI1wJdt8xIPM8U4g+0LrJwUxVhjvFuOfGgU1dd5l09H22HXQZPQ5ib4QGJxO3i1YWfQGp6pq9Su22TzYida68i3jI3ep9QN3GP77ISOL3ouwwu8tyhXb0Rqb4Xcs50LHTEgOTpF3fEYW3cGp6i9KimbNS2bwLatxJXEm1AvoFukGNk8DE42fG/P4KshNZq29GXDHrnHNriJC6xVwaBYwX4oQh/P6wrJoZjvMNxC+1SpE2HptUEBgzhsVns7xG9KiXWa9gojmULd+GyQQW7egu5Oz+X4law8UlH2hwtZ3gwTia0808cN8F//KcDXxHs/QDRXqG6MXYYOx9gRNK76/NjfdKMo21Kxu8vy7YkJrNDhlrh/SWTRuzFkIz6/2hYX60CCPWCLX8eMWaiYg3BEXui/Cgev4LrEUsxDa9EFC2Dq/T/wyUniEnQ0TgxDa9EHiLqXPiiCFh3V0y3EBYdm0bZ6FQmgVQLylAbb+JoV1bFd1fqE56He7m+3oU7zQc8hVYUoIqbMiCKF3bgxC5BZmJ6UKkac/wW2AuUrZKSFxLg0hHJ3nMCPyCpFC/dVONsorArhUxTU3TArJsyJw4eTcGJ/IKcTLS7uD8PlPE+oOhUfeYFuDC6fnxkyJnEJyDLYTtqxktgEgX0NDC4lzaTDh7DyHCZFPWB5QF7vTDlgfLDsNCMg53UYJibMiMOHz2ZEcYyKfEKwQXl0bwLsKVLL78Gwq59cItBA/lwYTol/WjIh8QqhCeHTJmx3Tsc3K9IuZ0QczZeZEKmelHy3E2xpUiJ8b4xE5hUHFNN3Ng0a72RwMmvudvUc77Akp3p38ASF2Lg0qJM6N8c6+U5JDvuD8wBISYgeZIULq3BiXKP8c8gb3d8CQ8A7S1iDCQ+ron79uyral3LErvDKDtTXI4BQRAmcb5d9d5fljUKk+Z+xzr3VDQl2HhNBRhvnrXEKtIvv9aIN/XggUFmaD05kQOsqQV1jW5Ih7Al8uwDncooXgUYa8Qq1ckfkUvyHyaQYsvOMPTn0heJQhtzDK0Tas2N0XmrqEhbO2xheC5+AJCMXKMFLe5IxYQQ0snI1rfCG4yYuIUCtnO/wlCrsN0U9rGEK/NfWFEFBMqGlFp82Xx9018cq2yDkET4UVFI6+YH4UuVldPahILB4whP7AzReCJ24KC0er9+0IC76p3f6+3LFnsHDWIc76Q0VtKRJFM6t1ApW5zbatooI24DFEhFCHKCccK2vZpvu2hG+455032D/oVOR33GONadYBYeppnbpR5YVelCumWZtsmthpdNr7Ta1i19TsmggKWzoyGYXPYuR79TkIp+G93nuhdOtLYK5NZ89iuHl8WK3PTTifIFZmCifEwbPUHrRHh9Ve/rIKW61j6kxWaB/hT3enibxUwlZhCzpoHt4LevvbOJGXSNgqvIDPYGfu5/38wk3kZRG2CkPm2d0Be7K7rU7vMgiv0K1LRKHX6lwG4TLdukQWcs+wLyL+909/SISJMBEuPhJhIkyEi49EmAgT4eIjESbCRLj4SIT/98I575enIpyQldgQYWrOW3MqCDtEECac87aO8gEW+/MIeas9Y4/QfanChAIHv8Qa4QVKocLUI7lCgrlGxQE32+QUpnINOwvFkoowr1FxFYoadAV2lN1TIgg9JBTLVxTEh/c3yHh3HQjwCiJdezQhGNC5NDzR2hienhlklG7m6ej9I36ZEkL6rAieKFhvHxj0fiv0mTFeVANPbZ6bMHUinMSW1fp8BmwnwwBi58bEKQTOpYnm2zj/F0gfE4ifGxOnkHHeXkhY1psvII8JzF+EX8qchPDJnoHps7Z+vWT4WEDi3JhYhSnO25TRuoQAMz2pa5QTwocmstKnn4KtSxiQODcmXiF1Lk2A7/wnO31BQPLcmHiF8KGJAK/w5kegLwBInhsTsxA8NJHyvX5VCuQFAalzY2IWkufS0GFtfP8dnL5goGQ7Iy8MHpy6ncMps3Pwgzr7DmtnJIakSoRBg9NWIahzQDL4N1RjPm1nJIakSoSM0649n368fj+c58bK0WG9Bx9bLDckVSOEB6fTWk94w0IC6P2Ps5pWIoUyQ1I1QuiAVqTWM5w43TDHq2kFiNLXJy8kB6dErWcYEdkR6GhU04o3pFJD0lHIC/Ektu6QtZ7BRGLLI7KSXj6FKoTI0K2gA7WerC1g02ly0yovjg7zfquTlxywjUKBMLWuF8bpAyvJA4gA0Auv1XGR9V5GAVCJ0B28nQyHW4xK8hT7RoWBKa/VuZu5eCg5XJuEGmFYwEQmUGnEIwSJ8QDjEgLEmICxCSliXMD4hAQxNmCMQrTTYHQTc4kYhamVl+M9/G+9jBEYqzCVevyklC49eRzr3/wPI3T14HfJ7GEAAAAASUVORK5CYII=" alt=""></img>
        </header>
    );
}

export default Header;