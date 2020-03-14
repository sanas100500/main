# main

## Добавить сабмодуль
``` bash
git submodule add https://github.com/sanas100500/module-1.git
```

## Обновить все сабмодули
выполняется в корне основного проекта

``` bash
git submodule update --remote
```

## Обновить 1 сабмодуль
выполняется в корне основного проекта

``` bash
git submodule update --remote module-1
```

## Обновить сабмодуль из удаленного репо
выполняется внутри папки сабмодуля

``` bash
git fetch 
git merge
```

## Спсок изменений репозитория, включаяя сабмодули
выполняется в корне основного проекта

``` bash
git diff --submodule
```
