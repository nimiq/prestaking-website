/* eslint-disable no-console */

import chalk from 'chalk'

export enum LogLevel {
  TRACE = 'trace',
  DEBUG = 'debug',
  INFO = 'info',
  WARN = 'warn',
  ERROR = 'error',
  FATAL = 'fatal',
}

const logLevelOrder = [
  LogLevel.TRACE,
  LogLevel.DEBUG,
  LogLevel.INFO,
  LogLevel.WARN,
  LogLevel.ERROR,
  LogLevel.FATAL,
]

export class Logger {
  public level: LogLevel = LogLevel.INFO
  public logTheDate = false
  public logTheTime = true

  constructor(public tag: string) {}

  public trace(...data: any[]) {
    this.log(LogLevel.TRACE, ...data)
  }

  public debug(...data: any[]) {
    this.log(LogLevel.DEBUG, ...data)
  }

  public info(...data: any[]) {
    this.log(LogLevel.INFO, ...data)
  }

  public warn(...data: any[]) {
    this.log(LogLevel.WARN, ...data)
  }

  public error(...data: any[]) {
    this.log(LogLevel.ERROR, ...data)
  }

  public fatal(...data: any[]) {
    this.log(LogLevel.FATAL, ...data)
  }

  private log(level: LogLevel, ...data: any[]) {
    if (!this.shouldLog(level))
      return
    const method = this.method(level)
    const line = [
      chalk.gray(this.timestamp()),
      this.methodColor(level)(level.toUpperCase().padEnd(5, ' ')),
      `[${this.tag}]`,
    ].join(' ')

    method(line, ...data)
  }

  private shouldLog(level: LogLevel) {
    return logLevelOrder.indexOf(level) >= logLevelOrder.indexOf(this.level)
  }

  private method(level: LogLevel): (...data: any[]) => void {
    switch (level) {
      case LogLevel.TRACE: return console.log
      case LogLevel.DEBUG: return console.log
      case LogLevel.INFO: return console.info
      case LogLevel.WARN: return console.warn
      case LogLevel.ERROR: return console.error
        // @ts-expect-error Undefined console methods
      case LogLevel.FATAL: return console.fatal || console.critical || console.error
    }
  }

  private methodColor(level: LogLevel) {
    switch (level) {
      case LogLevel.TRACE: return chalk.gray
      case LogLevel.DEBUG: return chalk.greenBright
      case LogLevel.INFO: return chalk.blueBright
      case LogLevel.WARN: return chalk.yellow
      case LogLevel.ERROR: return chalk.red
      case LogLevel.FATAL: return chalk.magenta
    }
  }

  private timestamp() {
    const date = new Date()
    let timestamp = ''
    if (this.logTheDate) {
      timestamp += [
        date.getFullYear(),
        date.getMonth().toString().padStart(2, '0'),
        date.getDate().toString().padStart(2, '0'),
      ].join('-')
    }
    if (this.logTheDate && this.logTheTime) {
      timestamp += ' '
    }
    if (this.logTheTime) {
      timestamp += [
        date.getHours().toString().padStart(2, '0'),
        date.getMinutes().toString().padStart(2, '0'),
        date.getSeconds().toString().padStart(2, '0'),
      ].join(':')
    }
    return timestamp
  }
}
