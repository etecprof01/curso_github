/*Programa para calcular a soma dos N primeiros números
naturais (1+2+3+...+N)*/
#include <stdio.h>
int main(){
 int num, s, i;

 printf("Digite um valor inteiro:");
 scanf("%d",&num);
 s = 0;
 while(num > 0){
 s = s + num;
 num--;
 }
 printf("A soma é %d\n", s);
} 