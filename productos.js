let productosAComprar = [
  {
    id: 1,
    nombre: 'Aceite de girasol',
    marca: 'Cañuelas',
    precio: '$ 600',
    categoria: 'Almacen',
    imagen: 'https://www.conradomarket.com.ar/images/000000000000005364137ALMACEN-Aceite--Girasol-CANUELAS-x-1500.jpg'
  },
  {
    id: 2,
    nombre: 'Aceite de girasol',
    marca: 'Cocinero',
    precio: '$ 750',
    categoria: 'Almacen',
    imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2W3ncyWT0hBPmeI3Fk44rnMMBxWARc3hnag&usqp=CAU'
  },
  {
    id: 3,
    nombre: 'Fideos mostachol',
    marca: 'Arcor',
    precio: '$  220',
    categoria: 'Almacen',
    imagen: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUVEhgVFRIZGRgaGRoeHBgaGRocHRwZGhoaGhocGBocIS4lHB4rIRgYJjgmKy8xNTU2HCQ7QDs0Py40NTEBDAwMEA8QHxISHzQrJSs9NDY2NjE0NDQ0NjQ2NDQ0NDE3NDQ0NDQ0NTQ0NDQ0NDQ9NDQ0NDQ0NDQ0NDQ0NDQ0NP/AABEIAOEA4QMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAABAUBAwYCB//EADsQAAIBAgQDBgQEBQMFAQAAAAECAAMRBBIhMQVBURMiYXGBkQYyscFCUqHRFSNicuEHM6IUkrLw8UP/xAAZAQEAAwEBAAAAAAAAAAAAAAAAAQIDBAX/xAApEQADAAIBBAEDBAMBAAAAAAAAAQIDESEEEjFBURMiYQUyccGRobFC/9oADAMBAAIRAxEAPwD7NERAEREARE8k2gHqJi8xmgHqJi8XgGYmLzMARExeAZiYvF4BmJ5zDrM3gGYmCZjNAPUTWzgen3mDUHjpANsTV2mtrc5sgGYiIAiIgCIiAIiIAiIgCRsT59PqJJkbE+vtAMOfm15r9oc/NrzX7TWx31PLl5TXjamVHa+oF9ugglLb0eK3EKalgayAi1wWAMDiFNiwFVCTbQMv6azgMRUQr3TcmxYm299SDv7zNTDLkcpUF1ZDbYg6j3uZkrfnXB0fRlNS29n0kk970npie96Ss4NjRUw+cnkAT4roZGxvxNRQkC7agaWtceM07lrZj9OnTlIuqjHvek8V6wUMWZVF11JAFztqZWYDj1KsxUXVmtYG2tuhkri+DNVGTKCr2uc1iCtiLeohNPwRU1L1S0S3f5tR+GenPza81+0qKVSijOxcZ3ZVYgk6gWFxyEnUsWrsyXAYEd3MCbA6HTrJKkl/xea/aeyTr5ieGt3tRuOflMVaqi92G45wD2x+bXmJrqH5tea/aR8TjAoYk6aeftK+lxtHUuoYrfcI3LT7SNoFs/4vNftMuB3v7l+0rKfEke+Uk6jS3l7TavEFObe9xpbykgsUAzH+4fSSJBwtYMxAB38OknQBMzEQDMREAREQBERAEREATXVGk2SPjqmWm7dFJ9heAir4hxmnR0LXb8qi59ekrV+KaT3SorKraZiAQL9bGclWximkAT/NZmYsel9BPWGQVASNMqZjcjX+0c5zfUquV4PR+jijU1vufghcY4NUpMVZzkPyuBdWU7a7bcpJpcPDkKqs9QgGy3vcjcnYCdZ8LYwdi9JwGCMfm1UIddb+N5BbjiBTTRsmZ3zVFF2yZjlWmBzItroBLKNpNPgjJkavtcptcfz+SFxzA9hgKdFKxLM5DsjA63JYadDpKH+GjZHciw01OY8/vOgxOMwTUjSTDuhNrVcqFrjm3euQeYmnA8LrMpKrmVgRmU3B8+Y8iBFNcaJhWofdw38lVgeFFnOVznU7DcW59N+c+lYpHGGDK4RgFYsVz6aFha432vK/hPAmFQO4ygC2/eYWtY25TosRhkdCjKGUixU9JOJeXrRz58jpJN7a9lXSoU6lTuqyOoBLZLBgw5EixE2Hg6ZxUXL2lxnfKCWtyYDS8sUw6KQQouBYHwHKUmAwiJiai08Q2fRmRhcWbUEdZqc5fMoA2HtKNOIIcUUZgDkJUdTfUedvvLnFtZCfCUWB4dRW1eoFeo3eBNiEvsE6ee8hgk4pwwtK/BVkXPTzCwZrEeJv9SZaYVUZ3sdbDuk3ABvqByv9poxWFQtooBvvYfaUe/IKbib5CroGZydlBJyjfMANpZZEemtZbj8w8twfETHBsUgQhiC+Y5jbexIFvDSYx+MUaDaoctud7E3/AEt6xL9h/BY8IdWZipuFAF/E6n6D3lvKD4QS2GvzLt+hy/aX81IMREzAEREAREQBERAEREATTiEzIynYqR7ibp4qC4I8DAPhPHKT0qxp1bjKTbT5h+Er4H9JYYfFIqIpvnAFgpuxuNFy89xOjo4pK2DIxFNH7PMpaoAbslx3fE2EhJxrB4fKtJKf/UEAPWcd1DYA67sR0Ew+m0uHpHoVnmqTqd0uCwo03WkcOulWp/Mq2/8AzS1lU/1G23nKDDqmRmN8+awHh/7adX8N4HBVC7LijWqOcz98rc/2ixIkXjXCK1Fm7ME0ibjKoJH9J0v6yaWp4K4abyPu4b+eCiVAQAQQxOl9m8rzq/g5WSoyH5SD5ZlIGnvKdOHvVbvIW1vYKdPAdBOw4XhewpZqpChFO50VdzcysfdXHotkyUsTm2nv/JczF5w/FvjFiStHur+ci7HxAOijzufKc83E6lVrXd2PK7N+mwneunrW64PJeZJ6XJ9VqG6kC17G2ttfMSFwfCNTpgPctre5zWudg3ScJR4RXYXIVPM6/wDH95Y4NMXSPdxVx+R1LKfdrj0tOfJWGPNo0nvr/wAna4lboROYwIqLiTQtembsL/hG5t1F+XjLvh/Eg4CvYPzAvY/2k/Sb3w4Dqw0IuL9QdxM1U5FuXsu01w0VGM4Y61Vq067K2gdCAVdNiLbg9DMgs18jZm26ZfOS8Q/fIYgeentInBMRRDYgIyl+0uwDX0Kra3hcH1vDl70vBOyl4hQfDhny5x82VDqBz0PLnpK3hGPasz130SmpCD0ux8TOl4id2vryHXwnO0qYWn2SbbsRt5CTM6ZDZ2nwslsJTvuQT/3EmXEh8Jp5aFNeiL9JMmhAiIgGYiIAiIgCIiAIiIAmJmYgHx/jjtTWooByU6lS99M7s5vb+kXt42nNYjBZCtRyHZwGNtbX5Wn1rjPw9TqitlUCo1yrXOjHXY6b/WfPKGHqK5WpcFbgjRTf2nNmetb8Hf023LqfJq4YCr50uLEWYaZT16gz7LwrEmpRVzuRr5jQ/SfP+GcFLFGXNnNizA3J6FiwI0AGnhPouDoZEC3vYam1rnmbScOm214K9TkdQu9fd/RvtOH/ANQ8ew7Ogl+/3mA3axsq+9/YTuZxvxxRyMmIVQzIrLYn5c3yvbnbvepE68TU2mzz8ibk5nEcOorhg758yOe0ZRcOCAFC/lXNdQedieYk5FqKq06BSkTR7bLkLHJrbPUOgYgcx6znMLxRkSujrnWsmVrmxDD5GBsdjyk7F/FDVEdGSyMtPIA5/ltTAAYad4G2onRXT3Vbvn/hj9SUvt4/6Yx2GrZlSriXNVgtqYzGxb5VYggBjcaAG15oPB2zuiYgNVpozMi5/wAFs4V9mYXnvE8cz1lxHZWrAoxIfuFksLlCtxcC1s08U+MKju9KiVeoTnLPmAVmzOqWUWDbXNzaaLG0tdq/wZqudtlnQp4jDNUJxAc0AjVEIawD2ICVDuwvtpPp9MhlBtuAfcXnzOljXxzmlVSyGt2mbOf5aaBkIt3hbbaxM+nIRYW25eU4skRNcJJ+9HXFU1+PRFxGEzCxsR0YBhKypgkS7LRQHqBaXuaRMSJXZY5HFUnc3Y2HQX28zPaYUKhsJN4w+W1us10MQrJ5WuJRZJdOfaJ7XrZ1tFbKo6AfSbJ5U6Ce5cgxEzEAREQBERAEREAREQBERAIJH8xvT6CK2BpubtTVj1KgmYrPlck9AfrOX4hxbENVQU3ygva1tMvMnrpf9JDSa5LSq3wdelNUXRQoA2AtoJVDizdpcqOz6i+bzPK0sMMxqURm3ZbHl4Xlbg8GUGVhqNA3IjkbxwkTKT3stK2IFu6bm1/TkZyeKo56ZuxLEm7E73NrGXGJqinZVXQmx8tpVU2D0iRyLWPhmM8rqclVyvR04o0c9xbgCBO0S6gtYIddNgb7i5vK7+AVLXCZh1Ug/e87HEYoVKPU2/USnw2KekWuMyc9xa/2nTj/AFLPjnymvz5KX0WO/wAP8FAuC1ykG/Tb6z3VwZS11/edS/CWxFqi2Q+Oub00kvEcBzrldwNBqBrfre8X+qZ7XCS/giOiwS/ubf8AJA4bjRTogrTRba7EknqWvOhwWKZCqKMwO4vsOo6eUrP4FTtZnYjzAmKQDvaneyMt2JJLZdt+W889ZbVd7fJ01ENalcHSHGZTqNOt/wB4TGo/Oco2MdarU6hFn1SxvlOuhPjNa1WR78uc3jram0r8P/Rz3h0uC343S2PKUmGqFaq9Cwv7zoaFYOuutxK8cPy1Qd1vcftNeoxVNrLDKRSa7aO0EzPK7T1PRMRERAEREAREQBERAEREAREQCr4kNWt+T7mVeE4fmbblYHw5n1l1W/3Rfmv3MdrTTS4WRosm14JSrYADlKrHYy1UKNQo18z/AIlojgi4Nx1E5bGVlSo5JuzMbKN9NB5aATk63I4jg0wz3VybKlcVKhVbWG55jwmqs+RmGUlTYCw2FrSC+LSh3nJBY3OXU68vKW2F4/SYAEFfAiw9J582rX3cHW5c/tW0c1gMO5qOmyBj3joBfUesuKfD3Ud4q46E2v5y1qYymRy9pBqcWu2WmityGgNz9hJ2k+1sh1VeERa+LxIOVaShRtYkyBjcZiFF2cJrtYG56X1sZcipV0N0tsxubDwGmvp0lIyuG7NaFiTbvNmGYEWtoNNzM6nXJpLXwj3hcPVqWDubty5AeNpb1iKKBEW7HYDcnqZnCV1RSpJZgCWewAv0H0EhpWquGqLp4WB0HnK60HTp/gmYLh+XvVDdjuenl+814nC3GddVI36W3+kqm4jWZO+QBztz8NBvLBOI5KJRejb+Im0Tjaavx/ZllVLn2R6FQ021+XleW2Gq3IuNyJzb1zUqKL3AAJPgB+8veFXaog8bzpx5HSUz8+/g53OttnXCIEzPSMDEzEQBERAEREAREQBERAEREApuNVijIRubge4nPY9HYEgFj46D3M6nGUQ1RQRspP6zNTAIRqCfC8FppSc78H0ayVHDsCrC+VSSFPK/K5+0141cr1XQFiHNxa5BJOotuD9p0a4yjTcUswViLhbW/Xa8ovimqaWYoCGJDFuVrEW8db6Tg65Jxv4Zvgrd8ezn6WMZcz1MI+n42B230uLD/EtsPWpFFqtRbIwuGJU6dSL6T3wvii1VyuNbag7HyvynqpSNNcqremNgPwjy6TyXSS2jse96fB5Xi9N6i0kswJ1I2AA1sZ4wlEU6zMzXAPd5WH7yCmFRKi1Ea17nLbQ6kaHlJvFMM1aichs9tD9j9IeR1wie1LheGTsBWpuCovlVr3Nu9p+g1/SeGxNy4FrgmzHa/S/vKz4XDKjB7Xvra/3lpQwwCM1/me45+E2m3S5M3Klsh0Uq2d9CQLhWJI03sOs3IW1stgjkn1CkfVh7ywxa2Q5B3mOx8/oJ7weFKrmdrnfkP/vrLzOuCrrjZW4fD37z0wNe6CTqOuXlNPHKLH5Vy93l66yTxT4lVQVpAOw5/hH7yDisTW7EFwbut7nxFwPDS2kvLx7e9tL4KX3634IWEoFFLHchdfC06T4fQ578rTlqWIbKA2qgDTpbpO04OytlKnlr12m+BxeRueNeEY13KdMvYmInpGAiZiAIiIAiIgCIiAIiIAiIgER/9wf2/cz1iqhVSQpYj8Itc+V5ip848vuZA48aZouHdlCrclD3xbawEhkM43H1Xeq1VkYNcdzY90i1+h8p13EsKcRh1JFiQCQDcWNidedv3nI4fFvQL1aTl0sSWdDYbE5+d/WWeI+LVqYYlCKdQEXQ2bMv9JHL6TFzNS1XsiK7a7kaMVwyoO7TW1uYG3rLHBVXVQtRCx6qN/faauGcXYoA7HMALht9Rsb7n/7JT8QZj3EX1M8usCiuD0Zyu14AoLf/AG7KTezAEA9R0ntKIR7E6Nt59JFUvU1LFR0v+09rXDgoGuy8/vKVMotyZrYZUzPfRvDnNhqqqqtr6/5kDEVzdc5tchSOmp18icskV6qq6ZgbWOwufaZd3wtE6fscTxuRkyrcnYa/paRamGxFf5myL+X95uypWBZu6o0G9x7c54Q1qZCpd0bQEnn0IOxhKqf4fwSmpXHn8m3D8IpU7FrEnS5lhicri1tJU44ups+/6eki0+JFDYnu+PKdvS5YxU8dLWzly91c72OJcPCd5SLdCfpLL4bJzpy09xIOLw7VO8pB8CZO4JSqKy5lO/pNPpuc+0tIqq3OmzrogTM9IwMTMTEAzERAEREAREQBERAEwZmYMAoeL8V7NnUZQ601Zcx0OZmuPPuzjXxZrFmL5HsflbNe2unP0k742rKmMpueSIctib61NLTn8fhUYu1AMrgi6Fr2W4LZQOfLeYXXOjOvJOwnFLVHTEO3ZOuRkXUXcAZ9NiNBeQqmFCoGRhVp0yRmAI3NxcW8QJV0aTuQGte5AJ00sfvbWd/8K/D+Sk/aFW7S2gN1ygW357yJTrhlF9xo4bw562GU91XFyjgizjo9vUHylxisC/Zg01AawuvTTWx5yVwzhi4dCiElcxIub2vy8poq8ew6Z81UDs3RH7raO9so2133Ggsek0rArnTXJvFuOSvq4oEBACr5e8CpGUAa2vuek01+6isi5WIOmpta/wA3XaWtfjWGNTsmcFgctyjZA9r5c9sobwveV78bwmXtM75bhQwp1SDfa3cN1PXYzjv9Ptv7TpnqpXkhYmq1enlKqrfmudbeB9JYcPLlQcgdrAZjpoOswK+EfOM9uzCu4IZMoZbi9wLacuU28KxmGLKlPMC2bKHSopOUBj84GlmGsR0NLmia6mWtST0pPf5F8bHT/MmLTA5faVT/ABHhlsWqGxzHRKjZQrFCz2XuLmUi5sNJOpcRpvnyNmyNlawPzWDaE76MNROuOnUc6Od5e7gp+MHM/gJT4nAki6a+HMSy4izBzfntIOGxeRrNtPOSmsrnIvfD+DXlTtG/AsykAgzqcI2XKOZ+8qMNVR9ec2YSsTWtfS4/aejkvSTXsyS2zp4gRNSomZiIBmIiAIiIAiIgCIiAJiZmDAOF+KnVcQzvb5VVbi5FhcsLbak+0oMNhajYjIhHy3v/AEnXU+ol3xjs8Ri1DOVBbIBYnMQT7Tp8PhkXUKL2AvbWw2ExUKq2Za7mcPw7gGIqFmqd21RQoYW7q3zEeJvad/h6YRAqgAAWAGg8ozg8x7z2hHIzWYU+C8ykQqfFqTkqKgDKSGVjYgjcdD6Tkcb8PozuWxChmNcsMrau5Y0SepRXPnynYYrAUqhzPTVj1I105E8x4TTX4dTZixBuSDobd5RZT5jlNVXb4Ic93k59eHFkamK9NqC1O2c5WL3zZyp5FS4Ou9riR8Pw21OonbIoZqTLTTtCi9nUDMVV7kFrWsNBadE+FpoGbUDJlOp1FgBpzP7yB2aZywpuNzcHvZiddDptpvLKmyHKKx+BFs7HFgswqZ+73RncOCul3s6oLE9Rzk2rhDWqU2xNSn3Mwy02qIT2iDLrcEHuObaSeKdJE7quy5bix+QZgdL63zLfnqJqShTdszK92zd5m3Nsp0voQNtBHcx2op8Jw1qaslHEUz2iMj5lc2UPUZXQ87LUIN9CRvJ3BcKaOcLURqJIIOucEpTC5idNgD6yd/DaZt82gI3/AAm918BqfHWexgKYVkIJVjcqSTr1HMbDnykO9olToiVq9OqSiNmYC5I2A8+d/CU1WkSwBHM39OUvKtRaIy06QtvZdLnXaw1OnPqJFxDu+gp6sM17HQg6es5M3Tq33T55NYvt4ZX0K5R/Ay14TVzVbDcWJPrKWqpG4seY6GWnw3WBqW25eu84unXc+yn4Nb4XcvZ3Q2nqeVOkzPTMBMzEzAEREAREQBERAEREATBmZ5bYwD5ciN/1uR7h+0uGFufMeYsPKd9T2mKuFQurlBnUaNbUX31muvWCgnoDKzPaVU6NVThys5bPYn+hTb1tf3nqlggjBswNv6QORG4858l4r8S1TVz0yUcZgXDHVbggW2AE+kcE4x29BHbRioLDxtraaPaJ0i7d7SM+IX8w9xNL4gc5y3E/iOhTqFEphmXUnRVBHK/NvISEiTp67hkZQV1BA1EiZVzh8vPMBnHzcz81reFpT8E41TxF8tMLltod7nYr4aS1Kpa2RbeQ5yU9EaNveVVyldEVTtbS9+Y3vPeFBGUErZAQNQOQFvmMjgJ+RfYT2Sl7lVv1tGyNE9qij8Q9xI1XGIOd/KVmMrJm+UeOg16zWcMpF07vlt7TCrdJqPK+TRJL9x4x79pUBFlsLXY3BGpK2ym19Ltfa+hnn+HOBmQqxu2iMVJD2smbSyJlFrew1nh6bryv5TNFyDpcHwvMo6jNL7aWyaxy+UyVxPClVVueUBv7gLXvI+CQ06iMu5fW/wD74SYazZLPr5yJRfNVW35hMKWs258s0T3PPo+g0T3R5T3PK7Cep6KMBERAMxEQBERAEREAREQBMGZmus1lJ8IBV4p7Svc30POUPxL8UihUNNVBcAEk7C+o23lVgfjO5HahbE27oYWHXUm8nTBU4/4WqJVYCxQnRudr3tbrOp4XSyIFHIS3Zg63F7eII/QzmuL8dSjUKWAyi5JDHW1wAFGpk72RovK+YqwBsSDY9DbSfPq/Bqwchqet973HnOg4D8VJiHyMpV/I5T5EzpTRvyjwScxwLhxp68zvOhZyBe15zXF3qpUYMtS1zkyKShHLVSDfrf2lnwJ6zIxcNlt3c6lTfwuSSJNS9bKqudEpsb4TbQxStpex6SDWwuIbcUweds0gPRrqdcgPrONvJjrlpo1Xa1wWmKWxnrAVb6dJEpV2ZQr2za6jYjl6yRw+mbluW0pj4yvXhln+3k3YmsyHQzbhsWGNiLGMZRLLcDUSup6MDDuoy6fhhSnJIxdQkkSTwyhZgTvebKOCza85teoE/ul4hY93T5Kut/ajsk2HlPUr+C4ztaQbmCQfMf4Ik+by1STRVrT0eoiJYgREQBERAEREAREQBNVVMwte02xAOU498FUsUwdqjI4FsygXt0N5XYP/AE2oo4Zq9R7fhIUD1tO7iNsENeHIBbWUPF/gbD4ioXepVXMACEZQDbbdTrOriAcVgP8ATjCUagdXrXH5nUj/AMZ0y8NQC1z+n7SfEnYK1uGdH/4ieP4R/X/xEtYkAq/4Qv5v0E8vwVDuR/2/5ltMQCkPw7T8PRf8zYeBJkKZiAegF/SW8SO1DZTU+BhdqjW6EAxU4Aja3162EuYlfpzrwTtlanCwPxfpIWM4CWYsHAv1EvzEjJjnItMS2ntFbwfAGijKWBu19BbkB9pZREtMqUpXoN7ezMxEzLECIiAIiIAiIgCIiAYmYiAIiIAiIgCIiAIiIAiIgCIiAIiIAmJmIAiIgCIiAIiIAiIgH//Z'
  },
  {
    id: 4,
    nombre: 'Fideos mostachol',
    marca: 'Matarazzo',
    precio: '$ 235',
    categoria: 'Almacen',
    imagen: 'https://www.multifood.com.ar/images/000Z-001-002-00534791Z-001-002-005-Matarazzo-Mostachol.jpg'
  },
  {
    id: 5,
    nombre: 'Fideos spaghetti',
    marca: 'Arcor',
    precio: '$ 220',
    categoria: 'Almacen'
  },
  {
    id: 6,
    nombre: 'Fideos spaghetti',
    marca: 'Matarazzo',
    precio: '$ 240',
    categoria: 'Almacen'
  },
  {
    id: 7,
    nombre: 'Fideos tirabuzon',
    marca: 'Favorito',
    precio: '$ 230',
    categoria: 'Almacen'
  },
  {
    id: 8,
    nombre: 'Fideos tirabuzon',
    marca: 'Terrabussi',
    precio: '$ 220',
    categoria: 'Almacen'
  },
  {
    id: 9,
    nombre: 'Harina integral',
    marca: 'Pureza',
    precio: '$ 260',
    categoria: 'Almacen'
  },
  {
    id: 10,
    nombre: 'Harina de trigo',
    marca: 'Caserita',
    precio: '$ 190',
    categoria: 'Almacen'
  },
  {
    id: 11,
    nombre: 'Harina integral',
    marca: 'Cañuelas',
    precio: '$ 225',
    categoria: 'Almacen'
  },
  {
    id: 12,
    nombre: 'Harina de trigo',
    marca: 'Pureza',
    precio: '$ 240',
    categoria: 'Almacen'
  },
  {
    id: 13,
    nombre: 'Lata de tomates',
    marca: 'Arcor',
    precio: '$ 175',
    categoria: 'Almacen'
  },
  {
    id: 14,
    nombre: 'Lata de tomates',
    marca: 'Salsati',
    precio: '$ 220',
    categoria: 'Almacen'
  },
  {
    id: 15,
    nombre: 'Lentejas ',
    marca: 'Arcor',
    precio: '$ 500',
    categoria: 'Almacen'
  },
  {
    id: 16,
    nombre: 'Lentejas ',
    marca: 'La campagnola',
    precio: '$ 440',
    categoria: 'Almacen'
  },
  {
    id: 17,
    nombre: 'Pure de tomates',
    marca: 'Arcor',
    precio: '$ 180',
    categoria: 'Almacen'
  },
  {
    id: 18,
    nombre: 'Pure de tomates',
    marca: 'Salsati',
    precio: '$ 220',
    categoria: 'Almacen'
  },
  {
    id: 19,
    nombre: 'Sal fina de mesa',
    marca: 'Celusal',
    precio: '$ 180',
    categoria: 'Almacen'
  },
  {
    id: 20,
    nombre: 'Sal fina de mesa',
    marca: 'Maroleo',
    precio: '$ 90',
    categoria: 'Almacen'
  },
  {
    id: 21,
    nombre: 'Vinegre de alcohol',
    marca: 'Maroleo',
    precio: '$ 240',
    categoria: 'Almacen'
  },
  {
    id: 22,
    nombre: 'Vinegre de alcohol',
    marca: 'Menoyo',
    precio: '$ 190',
    categoria: 'Almacen'
  },
  {
    id: 23,
    nombre: 'tuper',
    marca: 'tropeli',
    precio: '$ 630',
    categoria: 'Bazar',
    imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLJ2hhpGQSYfaFaGsBp4WMFKpfvG8LRYrcwUv5klhcTaUKmRqpHsu_r5kMGXQKjoHwMkY&usqp=CAU'
  },
  {
    id:24,
    nombre: 'Juego de tuper',
    marca: 'tropeli',
    precio: '$ 748',
    categoria: 'Bazar',
    imagen: 'data:image/jpeg;base64,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'
  },
  {
    id: 25,
    nombre: 'tuper de acrilico',
    marca: 'tropeli',
    precio: '$ 1006',
    categoria: 'Bazar',
    imagen: 'data:image/jpeg;base64,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',
  },
  {
    id:26,
    nombre: 'Tabla para picar plastica',
    marca: 'polipropileno',
    precio: '$ 735',
    categoria: 'Bazar',
  },
  {
    id:27,
    nombre: 'Abrelatas destapador uña',
    marca: 'abre facil',
    precio: '$ 220',
    categoria:'Bazar',
  },
  {
    id:28,
    nombre:'Batidor semiautomatico',
    marca:'fontella',
    precio:'$523',
    categoria:'Bazar',
  },
  {
    id:29,
    nombre:'Set X3 cubeteras siliconadas',
    marca: 'hielera 12 cubos hielos',
    precio: '$5800',
    categoria:'Bazar',
  },
  {
    id:30 ,
    nombre:'Cubitos de hielo reutilizables',
    marca:'10 pack X20 unidades',
    precio:'$ 4300',
    categoria:'Bazar',
  },
  {
    id:31,
    nombre:'Dosificador dispenser jabon detergente',
    marca:'jhonson',
    precio:'$7500',
    categoria:'Bazar',
  },
  {
    id:32,
    nombre:'panera de tela',
    marca:'telaUP',
    precio:'$ 2500',
    categoria:'Bazar',
  },
  {
    id:33,
    nombre:'Cesto tacho papel',
    marca:'tramontina',
    precio:'$ 3200',
    categoria:'Bazar',
  },
  {
    id:34,
    nombre:'Rallador cortes verdudas',
    marca:'tramontina',
    precio:'$8500',
    categoria:'Bazar',
  },
  {
    id:35,
    nombre:'taza de ceramicas',
    marca:'varios modelos',
    precio:'$2230',
    categoria:'Bazar',
  },
  {
    id:36,
    nombre:'Vasos vidrios 300cc',
    marca:'tratorinni - por Unidad',
    precio:'$ 300',
    categoria:'Bazar',
  },
  {
    id:37,
    nombre:'Compotera para postres ',
    marca:'postelist',
    precio:'$ 350',
    categoria:'Bazar',
  },
  {
    id:38,
    nombre:'rallador para quesos',
    marca:'quesin',
    precio:'$ 440',
    categoria:'Bazar',
  },
  { id: 39, 
    nombre: "Refresco de cola",
    marca: "Coca-Cola", 
    categoria: "Bebidas", 
    precio: '$ 475',
  },
  {
    id: 40, 
    nombre: "Jugo de naranja", 
    marca: "Tropicana", 
    categoria: "Bebidas", 
    precio:  '$ 220',
  }, 
  { 
    id: 41, 
    nombre: "Gaseosa de limón", 
    marca: "Sprite", 
    categoria: "Bebidas", 
    precio:  '$ 375',
  },
  { 
    id: 42, nombre: "Jugo de manzana", 
    marca: "Del Valle", 
    categoria: "Bebidas", 
    precio:  '$ 130',
  },
  { 
    id: 43, 
    nombre: "Refresco de cola light", 
    marca: "Coca-Cola", 
    categoria: "Bebidas", 
    precio:  '$ 475',
  },
  { 
    id: 44, 
    nombre: "Gaseosa de naranja", 
    marca: "Fanta", 
    categoria: "Bebidas", 
    precio:  '$ 375',
  },
  { 
    id: 45, 
    nombre: "Jugo de piña", 
    marca: "Natura", 
    categoria: "Bebidas", 
    precio:  '$ 130',
  },
  { 
    id: 46, 
    nombre: "Sobre de jugo de frutas mixtas", 
    marca: "Tang", 
    categoria: "Bebidas", 
    precio: '$ 60',
  },
  { 
    id: 47, 
    nombre: "Gaseosa de uva", 
    marca: "Fanta", 
    categoria: "Bebidas", 
    precio:  '$ 375',
  },
  { 
    id: 48, 
    nombre: "Jugo de durazno", 
    marca: "Del Valle", 
    categoria: "Bebidas", 
    precio: '$ 140',
  },
  { 
    id: 49, 
    nombre: "Sobre de jugo de mango", 
    marca: "Tang", 
    categoria: "Bebidas", 
    precio: '$ 60',
  },
  { 
    id: 50, 
    nombre: "Gaseosa de cola zero", 
    marca: "Coca-Cola", 
    categoria: "Bebidas", 
    precio:  '$ 600',
  },
  {
    id: 51, 
    nombre: "Hamburguesa de carne", 
    marca: "Sabrosa", 
    categoria: "Congelados", 
    precio: '$ 200' 
  },
  {
    id: 52, 
    nombre: "Papas bravas", 
    marca: "Crispy", 
    categoria: "Congelados", 
    precio: '$ 150' 
  },
  {
    id: 53, 
    nombre: "Helado de chocolate", 
    marca: "Delicioso", 
    categoria: "Congelados", 
    precio: '$ 180' 
  },
  {
    id: 54, 
    nombre: "Milanesas de pollo", 
    marca: "Caseras", 
    categoria: "Congelados", 
    precio: '$ 250' 
  },
  {
    id: 55, 
    nombre: "Empanadas de jamón y queso", 
    marca: "Delicias Caseras", 
    categoria: "Congelados", 
    precio: '$ 220' 
  },
  {
    id: 56, 
    nombre: "Vegetales para wok", 
    marca: "Frescoreal", 
    categoria: "Congelados", 
    precio: '$ 170' 
  },
  {
    id: 57, 
    nombre: "Tarta de calabaza", 
    marca: "Delicieux", 
    categoria: "Congelados", 
    precio: '$ 190' 
  },
  {
    id: 58, 
    nombre: "Canelones de carne", 
    marca: "Sabroso", 
    categoria: "Congelados", 
    precio: '$ 230' 
  },
  {
    id: 59, 
    nombre: "Sorbet de limón", 
    marca: "Fruiti", 
    categoria: "Congelados", 
    precio: '$ 160' 
  },
  {
    id: 60, 
    nombre: "Pollo al curry", 
    marca: "GourmetFit", 
    categoria: "Congelados", 
    precio: '$ 280' 
  },
  {
    id: 61, 
    nombre: "Croquetas de espinacas", 
    marca: "Natural", 
    categoria: "Congelados", 
    precio: '$ 190' 
  },
  {
    id: 62, 
    nombre: "Pizza de margarita", 
    marca: "Deliciosa", 
    categoria: "Congelados", 
    precio: '$ 210' 
  },
  {
    id: 63, 
    nombre: "Arroz tres delicias", 
    marca: "Frescoreal", 
    categoria: "Congelados", 
    precio: '$ 180' 
  },
  {
    id: 64, 
    nombre: "Tarta de cebolla", 
    marca: "Delicieux", 
    categoria: "Congelados", 
    precio: '$ 200' 
  },
  {
    id: 65, 
    nombre: "Langostinos empanizados", 
    marca: "Marítimo", 
    categoria: "Congelados", 
    precio: '$ 350' 
  },
  {
    id: 66, 
    nombre: "Croquetas de jamón", 
    marca: "Sabrosas", 
    categoria: "Congelados", 
    precio: '$ 170' 
  },
  {
    id: 67, 
    nombre: "Pescado a la plancha", 
    marca: "GourmetFit", 
    categoria: "Congelados", 
    precio: '$ 260' 
  },
  {
    id: 68, 
    nombre: "Empanadas de pollo", 
    marca: "Delicias Caseras", 
    categoria: "Congelados", 
    precio: '$ 200' 
  },
  {
    id: 70,
    nombre: "Salame", 
    marca: "Tradizione", 
    categoria: "Fiambrería", 
    precio: '$ 180' 
  },
  {
    id: 71,
    nombre: "Jamón cocido", 
    marca: "Delicioso", 
    categoria: "Fiambrería", 
    precio: '$ 250' 
  },
  {
    id: 72,
    nombre: "Chorizo", 
    marca: "Sabroso", 
    categoria: "Fiambrería", 
    precio: '$ 210' 
  },
  {
    id: 73,
    nombre: "Mortadela", 
    marca: "Casera", 
    categoria: "Fiambrería", 
    precio: '$ 190' 
  },
  {
    id: 74,
    nombre: "Lomo ahumado", 
    marca: "Premium", 
    categoria: "Fiambrería", 
    precio: '$ 320' 
  },
  {
    id: 75,
    nombre: "Salchichón", 
    marca: "Artesanal", 
    categoria: "Fiambrería", 
    precio: '$ 280' 
  },
  {
    id: 76,
    nombre: "Jamoncitos", 
    marca: "Gourmet", 
    categoria: "Fiambrería", 
    precio: '$ 350' 
  },
  {
    id: 77,
    nombre: "Pepperoni", 
    marca: "Delicia Italiana", 
    categoria: "Fiambrería", 
    precio: '$ 230' 
  },
  {
    id: 78,
    nombre: "Longaniza", 
    marca: "Tradicional", 
    categoria: "Fiambrería", 
    precio: '$ 240' 
  },
  {
    id: 79,
    nombre: "Salchichas", 
    marca: "Saborosa", 
    categoria: "Fiambrería", 
    precio: '$ 200' 
  },
  {
    id: 80,
    nombre: "Pastrón", 
    marca: "Kosher Deli", 
    categoria: "Fiambrería", 
    precio: '$ 290' 
  },
  {
    id: 81,
    nombre: "Fuet", 
    marca: "Exquisito", 
    categoria: "Fiambrería", 
    precio: '$ 260' 
  },
  {
    id: 82,
    nombre: "Sopressata", 
    marca: "Auténtica", 
    categoria: "Fiambrería", 
    precio: '$ 270' 
  },
  {
    id: 83,
    nombre: "Salami picante", 
    marca: "Fuego", 
    categoria: "Fiambrería", 
    precio: '$ 240' 
  },
  {
    id: 84,
    nombre: "Mortadela de pollo", 
    marca: "Saludable", 
    categoria: "Fiambrería", 
    precio: '$ 200' 
  },
  {
    id: 85,
    nombre: "Chistorra", 
    marca: "Vasco", 
    categoria: "Fiambrería", 
    precio: '$ 280' 
  },
  {
    id: 86,
    nombre: "Bacon ahumado", 
    marca: "Ahumado Master", 
    categoria: "Fiambrería", 
    precio: '$ 300' 
  },
  {
    id: 87,
    nombre: "Coppa", 
    marca: "Delizioso", 
    categoria: "Fiambrería", 
    precio: '$ 310' 
  },
  {
    id: 88,
    nombre: "Manzana",
    marca: 'El kg.', 
    categoria: "FrutasYVerduras", 
    precio: '$ 120' 
  },
  {
    id: 89,
    nombre: "Banana",
    marca: 'El kg.',  
    categoria: "FrutasYVerduras", 
    precio: '$ 80' 
  },
  {
    id: 90,
    nombre: "Naranja",
    marca: 'El kg.',  
    categoria: "FrutasYVerduras", 
    precio: '$ 70' 
  },
  {
    id: 91,
    nombre: "Pera", 
    marca: 'El kg.',
    categoria: "FrutasYVerduras", 
    precio: '$ 100' 
  },
  {
    id: 92,
    nombre: "Sandía", 
    marca: 'El kg.',
    categoria: "FrutasYVerduras", 
    precio: '$ 150' 
  },
  {
    id: 93,
    nombre: "Melón",
    marca: 'El kg.', 
    categoria: "FrutasYVerduras", 
    precio: '$ 120' 
  },
  {
    id: 94,
    nombre: "Uva", 
    marca: 'El kg.',
    categoria: "FrutasYVerduras", 
    precio: '$ 180' 
  },
  {
    id: 95,
    nombre: "Plátano",
    marca: 'El kg.', 
    categoria: "FrutasYVerduras", 
    precio: '$ 90' 
  },
  {
    id: 96,
    nombre: "Kiwi", 
    marca: 'El kg.',
    categoria: "FrutasYVerduras", 
    precio: '$ 110' 
  },
  {
    id: 97,
    nombre: "Durazno",
    marca: 'El kg.',
    categoria: "FrutasYVerduras", 
    precio: '$ 130' 
  },
  {
    id: 98,
    nombre: "Mandarina", 
    marca: 'El kg.',
    categoria: "FrutasYVerduras", 
    precio: '$ 90' 
  },
  {
    id: 99,
    nombre: "Lechuga",
    marca: 'El kg.', 
    categoria: "FrutasYVerduras", 
    precio: '$ 60' 
  },
  {
    id: 100, 
    nombre: "Tomate",
    marca: 'El kg.', 
    categoria: "FrutasYVerduras", 
    precio: '$ 80' 
  },
  {
    id: 101, 
    nombre: "Zanahoria",
    marca: 'El kg.', 
    categoria: "FrutasYVerduras", 
    precio: '$ 70' 
  },
  {
    id: 102,
    nombre: "Pimiento",
    marca: 'El kg.', 
    categoria: "FrutasYVerduras", 
    precio: '$ 90' 
  },
  {
    id: 103, 
    nombre: "Espinaca",
    marca: 'El kg.', 
    categoria: "FrutasYVerduras", 
    precio: '$ 60' 
  },
  {
    id: 104, 
    nombre: "Brocoli",
    marca: 'El kg.', 
    categoria: "FrutasYVerduras", 
    precio: '$ 80' 
  },
  {
    id: 105, 
    nombre: "Cebolla",
    marca: 'El kg.', 
    categoria: "FrutasYVerduras", 
    precio: '$ 50' 
  },
  { 
    id: 106, 
    nombre: "Detergente líquido", 
    marca: "Ariel", 
    categoria: "Limpieza", 
    precio: "$150" 
  },
  { 
    id: 107, 
    nombre: "Limpiavidrios", 
    marca: "Windex", 
    categoria: "Limpieza", 
    precio: "$80" 
  },
  { 
    id: 108, 
    nombre: "Jabón en barra", 
    marca: "Dove", 
    categoria: "Limpieza", 
    precio: "$50" 
  },
  { 
    id: 109, 
    nombre: "Desinfectante multiusos", 
    marca: "Lysol", 
    categoria: "Limpieza", 
    precio: "$120" 
  },
  { 
    id: 110, 
    nombre: "Limpiador de pisos", 
    marca: "Mr. Proper", 
    categoria: "Limpieza", 
    precio: "$180" 
  },
  { 
    id: 111, 
    nombre: "Detergente en polvo", 
    marca: "Omo", 
    categoria: "Limpieza", 
    precio: "$200" 
  },
  { 
    id: 112, 
    nombre: "Esponja de cocina", 
    marca: "Scotch-Brite", 
    categoria: "Limpieza", 
    precio: "$40" 
  },
  { 
    id: 113, 
    nombre: "Desodorante ambiental", 
    marca: "Glade", 
    categoria: "Limpieza", 
    precio: "$70" 
  },
  { 
    id: 114, 
    nombre: "Pañuelos de papel", 
    marca: "Kleenex", 
    categoria: "Limpieza", 
    precio: "$90" 
  },
  { 
    id: 115, 
    nombre: "Limpiador de baños", 
    marca: "Cif", 
    categoria: "Limpieza", 
    precio: "$150" 
  },
  { 
    id: 116, 
    nombre: "Toallas de papel", 
    marca: "Scott", 
    categoria: "Limpieza", 
    precio: "$120" 
  },
  { 
    id: 117, 
    nombre: "Limpiador de vidrios", 
    marca: "Spartan", 
    categoria: "Limpieza", 
    precio: "$100" 
  },
  { 
    id: 118, 
    nombre: "Lavandina", 
    marca: "Ayudín", 
    categoria: "Limpieza", 
    precio: "$60" 
  },
  { 
    id: 119, 
    nombre: "Guantes de limpieza", 
    marca: "Mapa", 
    categoria: "Limpieza", 
    precio: "$80" 
  },
  { 
    id: 120, 
    nombre: "Papel higiénico", 
    marca: "Scottex", 
    categoria: "Limpieza", 
    precio: "$110" 
  },
  { 
    id: 121, 
    nombre: "Quitamanchas", 
    marca: "Vanish", 
    categoria: "Limpieza", 
    precio: "$130" 
  },
  { 
    id: 122, 
    nombre: "Abrillantador para pisos", 
    marca: "Brillante", 
    categoria: "Limpieza", 
    precio: "$160" 
  },
  { 
    id: 123, 
    nombre: "Desengrasante", 
    marca: "Ajax", 
    categoria: "Limpieza", 
    precio: "$90" 
  },
  { 
    id: 124,
    marca:'El kg.', 
    nombre: "Pan francés", 
    categoria: "Panadería", 
    precio: '$ 50' 
  },
  { 
    id: 125,
    marca:'El kg.', 
    nombre: "Medialunas", 
    categoria: "Panadería", 
    precio: '$ 30' 
  },
  {
    id: 126,
    marca:'El kg.', 
    nombre: "Facturas", 
    categoria: "Panadería", 
    precio: '$ 40' 
  },
  { 
    id: 127,
    marca:'El kg.', 
    nombre: "Baguette", 
    categoria: "Panadería", 
    precio: '$ 60' 
  },
  { 
    id: 128,
    marca:'El kg.', 
    nombre: "Croissants", 
    categoria: "Panadería", 
    precio: '$ 35' 
  },
  { 
    id: 129,
    marca:'El kg.', 
    nombre: "Panes integrales", 
    categoria: "Panadería", 
    precio: '$ 55' 
  },
  { 
    id: 130,
    marca:'El kg.', 
    nombre: "Bollos de canela", 
    categoria: "Panadería", 
    precio: '$ 45' 
  },
  { 
    id: 131,
    marca:'El kg.', 
    nombre: "Rosquillas", 
    categoria: "Panadería", 
    precio: '$ 25' 
  },
  { 
    id: 132,
    marca:'El kg.', 
    nombre: "Pan de centeno", 
    categoria: "Panadería", 
    precio: '$ 65' 
  },
  { 
    id: 133,
    marca:'El kg.', 
    nombre: "Muffins", 
    categoria: "Panadería", 
    precio: '$ 40' 
  },
  { 
    id: 134,
    marca:'El kg.', 
    nombre: "Pretzels", 
    categoria: "Panadería", 
    precio: '$ 30' 
  }, 
  {
    id: 135,
    marca:'El kg.', 
    nombre: "Pan de maíz", 
    categoria: "Panadería", 
    precio: '$ 50' 
  },
  { 
    id: 136,
    marca:'El kg.', 
    nombre: "Donas", 
    categoria: "Panadería", 
    precio: '$ 35' 
  },
  { 
    id: 137,
    marca:'El kg.', 
    nombre: "Pan de leche", 
    categoria: "Panadería", 
    precio: '$ 40' 
  },
  { 
    id: 138,
    marca:'El kg.', 
    nombre: "Galletas", 
    categoria: "Panadería", 
    precio: '$ 30' 
  },
  { 
    id: 139,
    marca:'El kg.', 
    nombre: "Tortas", 
    categoria: "Panadería", 
    precio: '$ 80' 
  },
  { 
    id: 140,
    marca:'El kg.', 
    nombre: "Palmeritas", 
    categoria: "Panadería", 
    precio: '$ 25' 
  },
  { 
    id: 141,
    marca:'El kg.', 
    nombre: "Panes especiales", 
    categoria: "Panadería", 
    precio: '$ 70' 
  },
];